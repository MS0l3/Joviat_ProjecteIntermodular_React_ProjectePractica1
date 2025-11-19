// ✅ IMPORTS PRINCIPALES DEL PROYECTO
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 📦 IMPORTA AQUÍ TUS PANTALLAS
import AfegirPerills from "./src/Screen/AfegirPerills";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AfegirPerills"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AfegirPerills" component={AfegirPerills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
