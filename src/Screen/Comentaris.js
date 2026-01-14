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
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";
import { app } from "../../Firebase";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

export default function Comentaris() {
  const navigation = useNavigation();
  const isSettingsMode = false;
  const auth = getAuth(app);
  const db = getFirestore(app);
  const route = useRoute();
  const { postId } = route.params ?? {};

  useEffect(() => {
  console.log("POST ID:", postId);
}, [postId]);



  const handleButtonPress = () => {
    if (isSettingsMode) {
      navigation.navigate("Configuracio");
    } else {
      navigation.goBack();
    }
  };

  const pantallaMarca = "Pantalla_TapTopBar";
  const pantallaUsuario = "Usuari";

  const [comentaris, setComentaris] = useState([]);


  const [nouComentari, setNouComentari] = useState("");

  const afegirComentari = async () => {
 if (!postId) {
  console.error("postId es undefined, no se puede añadir comentario");
  return; }

  if (nouComentari.trim() === "") return;


  const user = auth.currentUser;
  if (!user) return;

  try {
    const comentarisRef = collection(db, "posts", postId, "comentaris");

    await addDoc(comentarisRef, {
      autor: user.displayName ?? "Anònim",
      comentari: nouComentari,
      date: serverTimestamp(),
    });

    setNouComentari("");
  } catch (e) {
    console.error("Error afegint comentari:", e);
  }
};

  useEffect(() => {
  console.log("POST ID RECIBIDO:", postId);
}, [postId]);

useEffect(() => {
  if (!postId) return;

  const comentarisRef = collection(db, "posts", postId, "comentaris");
  const q = query(comentarisRef, orderBy("date", "asc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      c_id: doc.id,
      ...doc.data(),
    }));
    setComentaris(data);
  });

  return () => unsubscribe();
}, [postId]);


console.log("POST ID:", postId);

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
  keyExtractor={(item) => item.c_id}
  renderItem={({ item }) => (
    <CeldaComentari
      autor={item.autor}
      comentari={item.comentari}
      date={
        item.date?.toDate
          ? item.date.toDate().toLocaleString()
          : ""
      }
    />
  )}
  showsVerticalScrollIndicator
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
