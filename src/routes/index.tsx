import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';

import AlertCustom from '@components/AlertCustom';

import AuthRoutes from './auth.routes';

const RootStack = createStackNavigator();

const Routes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.secondary.type2}
      />
      <RootStack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Main" component={AuthRoutes} />
        <RootStack.Screen
          options={{
            animationEnabled: false,
            cardStyle: {
              backgroundColor: 'rgba(0,0,0, 0.15)',
            },
          }}
          name="Alert"
          component={AlertCustom}
        />
      </RootStack.Navigator>
    </>
  );
};

export default Routes;
