import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Usuari from './src/Screen/usuari';


const Stack = createNativeStackNavigator(); // 👈 això crea la constant Stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuari" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Usuari" component={Usuari} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
