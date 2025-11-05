// App.js
// ✅ Configura navegación principal y el botón dinámico según pantalla

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";

import MapScreen from "./src/screens/MapScreen";
import ListScreen from "./src/screens/ListScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ TabBar
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="Lista" component={ListScreen} />
    </Tab.Navigator>
  );
}

// ✅ TopBar + botón dinámico
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() =>
                route.name === "Settings"
                  ? navigation.goBack()
                  : navigation.navigate("Settings")
              }
            >
              <Text>
                {route.name === "Settings" ? "Volver" : "Ajustes"}
              </Text>
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="Home" component={TabNavigator} options={{ title: "Inicio" }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: "Ajustes" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
