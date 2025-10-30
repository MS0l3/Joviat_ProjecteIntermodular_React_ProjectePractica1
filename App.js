// ✅ IMPORTS PRINCIPALES DEL PROYECTO
// -------------------------------------------------------------
// No borres ninguno de estos imports, todos son necesarios
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 📦 IMPORTA AQUÍ TODAS TUS PANTALLAS
// -------------------------------------------------------------
// Cada pantalla se guarda dentro de la carpeta /Screen
// Ejemplo: import NombrePantalla from "./src/Screen/NombrePantalla";
import Pantalla_TapTopBar from "./src/Screen/Pantalla_TapTopBar";

// 👇 Ejemplo de futuras pantallas (puedes ir añadiendo más aquí)

/*
import Pantalla_Formulario_Registro from "./src/Screen/Pantalla_Formulario_Registro";
import Pantalla_Seleccion from "./src/Screen/Pantalla_Seleccion"; 
import Pantalla_Explorar from "./src/Screen/Pantalla_Explorar";
import Pantalla_Preferits from "./src/Screen/Pantalla_Preferits";
import Pantalla_AfegirAlertes from "./src/Screen/Pantalla_AfegirAlertes";
import Pantalla_Usuario from "./src/Screen/Pantalla_Usuario";
import Pantalla_Ajustes from "./src/Screen/Pantalla_Ajustes";
*/

// -------------------------------------------------------------
const Stack = createNativeStackNavigator();

// 🧭 COMPONENTE PRINCIPAL DE NAVEGACIÓN
export default function App() {
  return (
    // 🔹 Contenedor principal de navegación
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pantalla_TapTopBar" // 👉 Pantalla inicial (puedes cambiarla por la que quieras probar)
        screenOptions={{
          headerShown: false, // Oculta el header de React Navigation (usamos el nuestro personalizado)
        }}
      >

        {/* 🔹 REGISTRO DE TODAS LAS PANTALLAS DEL PROYECTO */}
        {/* -------------------------------------------------------------
          👇 Aquí registras todas las pantallas del proyecto.
          Si añades una nueva, simplemente importa el archivo arriba
          y añádelo en este bloque con un nombre.
        ------------------------------------------------------------- */}
        <Stack.Screen name="Pantalla_TapTopBar" component={Pantalla_TapTopBar} />
    
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  
}
