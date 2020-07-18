import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { ThemeDinProvider, useThemeDin } from '@hooks/theme';
import Routes from './routes';

Icon.loadFont();

const App: React.FC = () => {
  const { theme } = useThemeDin();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
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
