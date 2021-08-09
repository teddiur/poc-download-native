import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './pages/Home';
import FsScreen from './pages/Fs';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'home'}}
        />
        <Stack.Screen
          name="FsScreen"
          component={FsScreen}
          options={{title: 'react-native-fs'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
