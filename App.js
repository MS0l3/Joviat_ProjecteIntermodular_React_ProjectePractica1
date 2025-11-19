import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from './src/Screen/LoginScreen';
import ForgotPasswordScreen from './src/Screen/ForgotPasswordScreen';
import 'react-native-gesture-handler';


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


// 📦 IMPORTA AQUÍ TODAS TUS PANTALLAS
import Pantalla_TapTopBar from "./src/Screen/Pantalla_TapTopBar";
import Pantalla_Preferits from "./src/Screen/Pantalla_Preferits";


// 🧭 COMPONENTE PRINCIPAL DE NAVEGACIÓN
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Identificacio" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Identificacio" component={Identificacio} />
          <Stack.Screen name="Configuracio" component={Configuracio} />
          <Stack.Screen name="Pantalla_TapTopBar" component={Pantalla_TapTopBar} />
          <Stack.Screen name="Pantalla_Preferits" component={Pantalla_Preferits} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}