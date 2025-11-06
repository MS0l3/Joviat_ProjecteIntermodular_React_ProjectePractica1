import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 🧭 Importa tus pantallas
import ListaScreen from "./src/Screen/ListaScreen";
import DetalleScreen from "./src/Screen/DetalleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lista"
          component={ListaScreen}
          options={{ title: "Ubicaciones" }}
        />
        <Stack.Screen
          name="Detalle"
          component={DetalleScreen}
          options={{ title: "Detalle del lugar" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
