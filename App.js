import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar } from 'react-native';
import ForgotPasswordScreen from './src/Screen/ForgotPasswordScreen';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';


const Stack = createNativeStackNavigator(); // 👈 això crea la constant Stack
// App.js

// Ignorar warnings específicos (opcional, para debugging)
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


// 📦 IMPORTA AQUÍ TODAS TUS PANTALLAS
import Pantalla_TapTopBar from "./src/Screen/Pantalla_TapTopBar";
import Configuracio from './src/Screen/configuracio';
import Identificacio from './src/Screen/identificacio';
import LoginScreen from "./src/Screen/LoginScreen";
import Pantalla_Formulario_Registro from "./src/Screen/Pantalla_Formulario_Registro";
import Pantalla_Preferits from "./src/Screen/Pantalla_Preferits";
import Usuari from './src/Screen/usuari';
import ElsMeusPosts from "./src/Screen/ElsMeusPosts";
import Comentaris from "./src/Screen/Comentaris";
import AfegirPerills from "./src/Screen/AfegirPerills";
import DetalleScreen from './src/Screen/DetalleScreen';


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
          <Stack.Screen name="ElsMeusPosts" component={ElsMeusPosts} />
          <Stack.Screen name="Pantalla_Preferits" component={Pantalla_Preferits} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Pantalla_Formulario_Registro" component={Pantalla_Formulario_Registro} />
          <Stack.Screen name="Usuari" component={Usuari} />
          <Stack.Screen name="AfegirPerills" component={AfegirPerills} />
          <Stack.Screen name="DetalleScreen" component={DetalleScreen} />
          <Stack.Screen name="Comentaris" component={Comentaris} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
