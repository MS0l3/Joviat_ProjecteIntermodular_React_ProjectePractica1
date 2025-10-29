import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Identificacio from './screens/identificacio';


const Stack = createNativeStackNavigator(); // 👈 això crea la constant Stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Identificacio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Identificacio" component={Identificacio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
