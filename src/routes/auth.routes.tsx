import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.backgoundPrimary,
        },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
