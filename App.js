import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pantalla_Formulario_Registro from "./src/Screen/Pantalla_Formulario_Registro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Pantalla_Formulario_Registro"
          component={Pantalla_Formulario_Registro}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
