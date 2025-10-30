import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 🧩 Importa les teves pantalles
import ElsMeusPosts from './Screens/elsMeusPosts';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ElsMeusPosts"
        screenOptions={{
          headerShown: false, // amagarem la capçalera per usar les personalitzades
        }}
      >
        <Stack.Screen name="ElsMeusPosts" component={ElsMeusPosts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
