import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { alert } from '@hooks/useAlert';

import { IUser } from '@interfaces/IUser';
import api from '@services/api';
import { navigate } from '@routes/RootNavigation';

export enum AuthType {
  PASS = 'PASS',
  FACEBOOK = 'FACEBOOK',
  GMAIL = 'GMAIL',
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: IUser | null;
  emailInactive: string | null;
  singnIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }: React.Props<any>) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [emailInactive, setEmailInactive] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const [accesstokenStorage, userStorage] = await AsyncStorage.multiGet([
        '@din:accessToken',
        '@din:user',
      ]);

      if (accesstokenStorage[1] && userStorage[1]) {
        api.defaults.headers.Authorization = `Bearer ${accesstokenStorage[1]}`;
        setUser(JSON.parse(userStorage[1]));
      }
    }

    loadStorage();
  }, []);

  const singnIn = useCallback(async (email: string, password: string): Promise<
    void
  > => {
    try {
      setLoading(true);

      const response = await api.post(
        'auth/commom',
        {
          email,
          password,
          authType: AuthType.PASS,
        },
        {
          headers: {
            clientsecret: 'client_secret',
            clientkey: 'client_key_mobile',
          },
        },
      );

      await AsyncStorage.multiSet([
        ['@din:accessToken', response.data.access.accessToken],
        ['@din:refreshToken', response.data.access.refreshToken],
        ['@din:user', JSON.stringify(response.data.user)],
      ]);

      await AsyncStorage.removeItem('@din:emailInactive');

      api.defaults.headers.Authorization = `Bearer ${response.data.access.token}`;

      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      if (error?.response?.status && error?.response?.data) {
        const { data, status } = error.response;
        const message = data.error;
        if (status === 403) {
          await AsyncStorage.setItem('@din:emailInactive', email);
          setEmailInactive(email);
          navigate('EmailActivation', {});
        } else {
          alert({
            title: 'Atenção!',
            message: `Falha na autenticação, ${message}`,
          });
        }
      } else {
        alert({
          title: 'Atenção!',
          message: 'Erro ao conectar ao servidor, tente novamente mais tarde!',
        });
      }
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    await AsyncStorage.multiRemove([
      '@din:accessToken',
      '@din:refreshToken',
      '@din:user',
      '@din:emailInactive',
    ]);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        emailInactive,
        singnIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
