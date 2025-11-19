import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Configuracio from './src/Screen/configuracio';
import Identificacio from './src/Screen/identificacio';


const Stack = createNativeStackNavigator(); // 👈 això crea la constant Stack
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


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Identificacio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Identificacio" component={Identificacio} />
        <Stack.Screen name="Configuracio" component={Configuracio} />
        <Stack.Screen name="Pantalla_TapTopBar" component={Pantalla_TapTopBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}