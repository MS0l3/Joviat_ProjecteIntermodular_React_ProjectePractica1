// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../Styles/Style_TapTopBar.js";
import comentarisStyles from "../Styles/Style_Comentaris.js";
import CeldaComentari from "../Components/CeldaComentari.js";

export default function Comentaris() {
  const navigation = useNavigation();
  const isSettingsMode = false;

  // 🔄 FUNCIONALIDAD DEL BOTÓN SUPERIOR IZQUIERDO
  const handleButtonPress = () => {
    if (isSettingsMode) {
      navigation.navigate("Configuracio");
    } else {
      navigation.goBack();
    }
  };

  // 🔹 NOMBRE DE LAS PANTALLAS
  const pantallaMarca = "Pantalla_TapTopBar";
  const pantallaUsuario = "Usuari";

  // 🔹 DATOS DE EJEMPLO
  const [comentaris, setComentaris] = useState([
    { id: "1", autor: "Marc", comentari: "Això és molt perillós!", hora: "Fa 2h" },
    { id: "2", autor: "Laia", comentari: "Jo també ho he vist.", hora: "Fa 5h" },
    { id: "3", autor: "Pol", comentari: "Compte si passeu per aquí.", hora: "Ahir" },
    { id: "4", autor: "Marc", comentari: "Això és molt perillós!", hora: "Fa 2h" },
    { id: "5", autor: "Laia", comentari: "Jo també ho he vist.", hora: "Fa 5h" },
    { id: "6", autor: "Marc", comentari: "Això és molt perillós!", hora: "Fa 2h" },
    { id: "7", autor: "Laia", comentari: "Jo també ho he vist.", hora: "Fa 5h" },
  ]);

  // 🔹 QUAN ES TOCA UNA CELDA
  const handlePressCelda = (item) => {
    console.log("Comentari seleccionat:", item);
  };

  return (
    <SafeAreaView style={comentarisStyles.container}> 
      
      {/* 🟥 TAPTOPBAR */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[styles.settingsButton, styles.redButton]}
          onPress={handleButtonPress}
        >
          <Ionicons
            name={isSettingsMode ? "settings-outline" : "arrow-back-outline"}
            size={24}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonMarca}
          onPress={() => navigation.navigate(pantallaMarca)}
        >
          <Text style={styles.textoMarca}>DangerZone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate(pantallaUsuario)}
        >
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* 🏷️ TÍTOL */}
      <Text style={comentarisStyles.titol}>Comentaris</Text>

      {/* 📄 LLISTA DE COMENTARIS (CENTRADA I AMB MARGES) */}
      <View style={comentarisStyles.commentsContainer}>
        {comentaris.length > 0 ? (
          <FlatList
            data={comentaris}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CeldaComentari
                autor={item.autor}
                comentari={item.comentari}
                hora={item.hora}
                onPress={() => handlePressCelda(item)}
              />
            )}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={comentarisStyles.listaContent}
          />
        ) : (
          <View style={comentarisStyles.emptyState}>
            <Text style={comentarisStyles.emptyStateText}>Encara no hi ha comentaris</Text>
          </View>
        )}
      </View>

    </SafeAreaView>
  );
}
