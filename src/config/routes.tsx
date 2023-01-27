import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as Screen from '../screens';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screen.Home} />
        <Stack.Screen name="EditProduct" component={Screen.EditProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
