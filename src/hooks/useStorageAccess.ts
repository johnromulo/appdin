import AsyncStorage from '@react-native-community/async-storage';

export async function saveAccess(
  accesstoken: string,
  refreshToken: string,
): Promise<void> {
  await AsyncStorage.setItem('@din_accesstoken', accesstoken);
  await AsyncStorage.setItem('@din_refreshToken', refreshToken);
}

export async function getAccessToken(): Promise<string | null> {
  const refreshToken = await AsyncStorage.getItem('@din_accesstoken');

  return refreshToken;
}

export async function getRefreshToken(): Promise<string | null> {
  const refreshToken = await AsyncStorage.getItem('@din_refreshToken');

  return refreshToken;
}
