import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import AlertCustom from '@components/AlertCustom';

const Util = createStackNavigator();

const UtilRoutes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Util.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Util.Screen
        options={{
          animationEnabled: true,
          cardStyle: {
            backgroundColor: 'rgba(0,0,0, 0.15)',
          },
        }}
        name="Alert"
        component={AlertCustom}
      />
    </Util.Navigator>
  );
};

export default UtilRoutes;
