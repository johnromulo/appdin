import 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { ThemeDinProvider, useThemeDin } from '@hooks/theme';

import AppProvider from './hooks';

import { navigationRef } from './routes/RootNavigation';
import Routes from './routes';

MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

const App: React.FC = () => {
  const { theme } = useThemeDin();

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

const DefaultAPP: React.FC = () => (
  <ThemeDinProvider>
    <App />
  </ThemeDinProvider>
);

export default DefaultAPP;
