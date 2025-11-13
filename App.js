// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

// Ignorar warnings específicos (opcional, para debugging)
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Pantalla_TapTopBar from "./src/Screen/Pantalla_TapTopBar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pantalla_TapTopBar"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Pantalla_TapTopBar" component={Pantalla_TapTopBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}