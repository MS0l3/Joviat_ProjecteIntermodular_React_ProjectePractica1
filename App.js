import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pantalla_Formulario_Registro from "./src/Screen/Pantalla_Formulario_Registro";
import Pantalla_Seleccion from "./src/Screen/Pantalla_Seleccion";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Pantalla_Formulario_Registro"
          component={Pantalla_Formulario_Registro}
        />
        <Stack.Screen
          name="Pantalla_Seleccion"
          component={Pantalla_Seleccion}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
