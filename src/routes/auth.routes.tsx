import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import SignIn from '@pages/Sign/SignIn';
import SignUp from '@pages/Sign/SignUp';
import EmailActivation from '@pages/Sign/EmailActivation';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.secondary.type2,
        },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="EmailActivation" component={EmailActivation} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
