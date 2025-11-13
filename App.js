// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 🔹 Importa tus pantallas
import Pantalla_TapTopBar from "./src/Screen/Pantalla_TapTopBar";
import DetalleScreen from "./src/Screen/DetalleScreen"; // ejemplo

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} // ocultamos la barra superior nativa
      >
        {/* 👇 aquí registras tu pantalla principal */}
        <Stack.Screen
          name="Pantalla_TapTopBar"
          component={Pantalla_TapTopBar}
        />

        {/* 👇 otras pantallas que quieras navegar */}
        <Stack.Screen
          name="DetalleScreen"
          component={DetalleScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}