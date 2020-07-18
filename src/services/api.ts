import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { saveAccess, getRefreshToken } from '@hooks/useStorageAccess';

const api = axios.create({
  baseURL: `http://localhost:3333/api/v1/`,
});

const refreshAuthLogic = (failedRequest: any) => {
  const failed = failedRequest;

  async function getNewtoken(): Promise<void> {
    try {
      const refreshToken = await getRefreshToken();

      const response = await axios.post(
        'http://localhost:3333/api/v1/auth/refresh_token',
        {},
        {
          headers: {
            refreshtoken: refreshToken,
          },
        },
      );

      await saveAccess(
        `Bearer ${response.data.access.accessToken}`,
        response.data.access.refreshToken,
      );

      api.defaults.headers.Authorization = `Bearer ${response.data.access.accessToken}`;

      failed.response.config.headers.Authorization = `Bearer ${response.data.access.accessToken}`;

      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  }

  return getNewtoken();
};

createAuthRefreshInterceptor(api, refreshAuthLogic, {
  onRetry: requestConfig => ({ ...requestConfig }),
  skipWhileRefreshing: true,
});

export default api;
