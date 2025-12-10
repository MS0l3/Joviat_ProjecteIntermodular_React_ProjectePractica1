// ✅ IMPORTS PRINCIPALS
import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  FlatList, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../Styles/Style_TapTopBar.js";
import comentarisStyles from "../Styles/Style_Comentaris.js";
import CeldaComentari from "../Components/CeldaComentari.js";

export default function Comentaris() {
  const navigation = useNavigation();
  const isSettingsMode = false;

  const handleButtonPress = () => {
    if (isSettingsMode) {
      navigation.navigate("Configuracio");
    } else {
      navigation.goBack();
    }
  };

  const pantallaMarca = "Pantalla_TapTopBar";
  const pantallaUsuario = "Usuari";

  const [comentaris, setComentaris] = useState([
    { id: "1", autor: "Marc", comentari: "Això és molt perillós!", hora: "Fa 2h" },
    { id: "2", autor: "Laia", comentari: "Jo també ho he vist.", hora: "Fa 5h" },
    { id: "3", autor: "Pol", comentari: "Compte si passeu per aquí.", hora: "Ahir" },
    { id: "4", autor: "Marc", comentari: "Això és molt perillós!", hora: "Fa 2h" },
    { id: "5", autor: "Laia", comentari: "Jo també ho he vist.", hora: "Fa 5h" },
    { id: "6", autor: "Marc", comentari: "Això és molt perillós!", hora: "Fa 2h" },
    { id: "7", autor: "Laia", comentari: "Jo també ho he vist.", hora: "Fa 5h" },
  ]);

  const [nouComentari, setNouComentari] = useState("");

  const handlePressCelda = (item) => {
  };

  const afegirComentari = () => {
    if (nouComentari.trim() === "") return;

    const idNou = (comentaris.length + 1).toString();
    setComentaris([
      ...comentaris,
      { id: idNou, autor: "Jo", comentari: nouComentari, hora: "Ara" }
    ]);
    setNouComentari("");
  };

  return (
    <SafeAreaView style={comentarisStyles.container}>

      {/* TAPTOPBAR i TÍTOL */}
      <View style={{ width: "100%", alignItems: "center" }}>
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

        <Text style={comentarisStyles.titol}>Comentaris</Text>
      </View>

      {/* LLISTA DE COMENTARIS + INPUT */}
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        {/* Caixa de comentaris */}
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
          <View style={[comentarisStyles.commentsContainer, { flex: 1 }]}>
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
                keyboardShouldPersistTaps="handled"
              />
            ) : (
              <View style={comentarisStyles.emptyState}>
                <Text style={comentarisStyles.emptyStateText}>Encara no hi ha comentaris</Text>
              </View>
            )}
          </View>
        </View>

        {/* Barra per escriure comentari */}
        <View style={comentarisStyles.inputContainer}>
          <TextInput
            style={comentarisStyles.input}
            placeholder="Afegeix un comentari..."
            value={nouComentari}
            onChangeText={setNouComentari}
            multiline={true}
            textAlignVertical="top"
          />
          <TouchableOpacity onPress={afegirComentari} style={comentarisStyles.sendButton}>
            <Ionicons name="send-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}
