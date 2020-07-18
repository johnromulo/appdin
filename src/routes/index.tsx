import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';

import AuthRoutes from './auth.routes';
import UtilsRoutes from './utils.routes';

const RootStack = createStackNavigator();

const Routes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgoundPrimary}
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
            animationEnabled: true,
            cardStyle: {
              backgroundColor: 'rgba(0,0,0, 0.15)',
            },
          }}
          name="Utils"
          component={UtilsRoutes}
        />
      </RootStack.Navigator>
    </>
  );
};

export default Routes;
