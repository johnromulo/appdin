import React, { useCallback } from 'react';
// import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { translate } from '@locales/translate';

import { saveAccess, getRefreshToken } from '@hooks/useStorageAccess';

import api from '@services/api';
import InputForm from '@components/InputForm';
import ButtonCustom from '@components/ButtonCustom';
import ButtonClearCustom from '@components/ButtonClearCustom';

import {
  Container,
  Content,
  IconMailOutline,
  IconLockOutline,
  SignContent,
  TextInfoSignUp,
} from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const teste = useCallback(() => {
    async function login() {
      const resp = await api.post(
        'auth/commom',
        {
          authType: 'PASS',
          email: 'mihema1007@pastmao.com',
          password: 'Teste123',
        },
        {
          headers: {
            clientsecret: 'client_secret',
            clientkey: 'client_key_mobile',
          },
        },
      );

      api.defaults.headers.Authorization = `Bearer ${resp.data.access.accessToken}`;
      api.defaults.headers.refreshtoken = `${resp.data.access.refreshToken}`;

      await saveAccess(
        `Bearer ${resp.data.access.accessToken}`,
        resp.data.access.refreshToken,
      );
    }

    login();
  }, []);

  const testeRefreshtoken = useCallback(() => {
    async function forcerefresh() {
      try {
        const rftk = await getRefreshToken();
        console.log('rftk', rftk);
        const reps = await api.get('auth/teste');

        console.log('testeRefreshtoken');
      } catch (error) {
        console.log('testeRefreshtoken error');
      }
    }

    forcerefresh();
  }, []);

  return (
    <Container>
      <Content>
        <InputForm
          icon={() => <IconMailOutline />}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder={translate('globalEmail')}
        />
      </Content>

      <Content>
        <InputForm
          icon={() => <IconLockOutline />}
          autoCapitalize="none"
          secureTextEntry
          placeholder={translate('globalPassword')}
        />
      </Content>
      <Content>
        <ButtonCustom text={translate('signIn')} />
      </Content>
      <SignContent>
        <TextInfoSignUp>{translate('questionSignUp')}</TextInfoSignUp>
        <ButtonClearCustom text={translate('signUp')} />
      </SignContent>
      <ButtonClearCustom text={translate('forgotPassword')} />

      {/* <Button onPress={teste} title="TESTE" />
      <Button onPress={testeRefreshtoken} title="testeRefreshtoken" />
      <Button
        onPress={() => navigate('Utils', { screen: 'Alert' })}
        title="Open Alert"
      />

      <Button
        onPress={() => navigate('Main', { screen: 'SignUp' })}
        title="SignUp"
      /> */}
    </Container>
  );
};

export default SignIn;
