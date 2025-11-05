import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapaScreen from "./src/Screen/MapaScreen";
import ListScreen from "./src/Screen/ListScreen";
import SettingsScreen from "./src/Screen/SettingsScreen";
import DetalleUbicacion from "./src/Screen/DetalleUbicacion";
import AddAlertScreen from "./src/Screen/AddAlertScreen";
import FavoritosScreen from "./src/Screen/FavoritosScreen";

import NavigationLayout from "./src/Components/NavigationLayout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationLayout>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Mapa" component={MapaScreen} />
          <Stack.Screen name="Lista" component={ListScreen} />
          <Stack.Screen name="Detalle" component={DetalleUbicacion} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="AddAlert" component={AddAlertScreen} />
          <Stack.Screen name="Favoritos" component={FavoritosScreen} />
        </Stack.Navigator>
      </NavigationLayout>
    </NavigationContainer>
  );
}
