import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Configuracio from './src/Screen/configuracio';


const Stack = createNativeStackNavigator(); // 👈 això crea la constant Stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Configuracio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Configuracio" component={Configuracio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
