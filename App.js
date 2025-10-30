// ✅ IMPORTS PRINCIPALES DEL PROYECTO
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 📦 IMPORTA AQUÍ TODAS TUS PANTALLAS
import Pantalla_TapTopBar from "./src/Screen/Pantalla_TapTopBar";
import Pantalla_Preferits from "./src/Screen/Pantalla_Preferits";

const Stack = createNativeStackNavigator();

// 🧭 COMPONENTE PRINCIPAL DE NAVEGACIÓN
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pantalla_Preferits"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Pantalla_TapTopBar" 
          component={Pantalla_TapTopBar} 
        />
        <Stack.Screen 
          name="Pantalla_Preferits" 
          component={Pantalla_Preferits} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}