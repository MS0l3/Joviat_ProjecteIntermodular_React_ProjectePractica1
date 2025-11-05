// ✅ IMPORTS PRINCIPALES DEL PROYECTO
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 📦 IMPORTA AQUÍ TODAS TUS PANTALLAS
import Pantalla_TapTopBar from "./src/Screen/Pantalla_TapTopBar";
import elsMeusPosts from "./src/Screen/elsMeusPosts";

const Stack = createNativeStackNavigator();

// 🧭 COMPONENTE PRINCIPAL DE NAVEGACIÓN
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="elsMeusPosts"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Pantalla_TapTopBar" 
          component={Pantalla_TapTopBar} 
        />
        <Stack.Screen 
          name="elsMeusPosts" 
          component={elsMeusPosts} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}