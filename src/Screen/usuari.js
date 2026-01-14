import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import styles from '../Styles/Style_usuari';
import { getAuth, signOut, updateProfile, updateEmail } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase"; // ajusta la ruta
import avatarDefault from "../../assets/avatar_default.png";



export default function Usuari({ navigation }) {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");


  useEffect(() => {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");

  const loadUser = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();

        setNom(data.nom ?? user.displayName ?? "");
        setEmail(data.email ?? user.email ?? "");
        setphone(data.phone ?? "");
      }
    } catch (e) {
      console.log("Error cargando usuario:", e);
    }
  };

  loadUser();
}, []);

useEffect(() => {
  if (!user) return;

  setNom(user.displayName ?? "");
  setEmail(user.email ?? "");

  const carregarphone = async () => {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      setphone(snap.data().phone ?? "");
    }
  };

  carregarphone();
}, []);



  const confirmarTancamentSessio = () => {
    setMostrarPopup(true);
  };

  const tancarSessio = async () => {
  try {
    await signOut(auth);
    setMostrarPopup(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "Identificacio" }],
    });
  } catch (e) {
    console.log("Error al cerrar sesión:", e);
  }
};
const guardarCanvis = async () => {
  try {
    if (!user) return;

    // 🔹 AUTH → nombre
    await updateProfile(user, {
      displayName: nom,
    });

    // 🔹 AUTH → email (puede fallar si no hay re-login)
    if (email !== user.email) {
      await updateEmail(user, email);
    }

    // 🔹 FIRESTORE → datos de usuario
    await updateDoc(doc(db, "users", user.uid), {
      nom,      // 👈 ESTO FALTABA
      phone,
      email,    // 👈 opcional pero recomendable
    });

    alert("Perfil actualitzat correctament");
  } catch (e) {
    console.log("Error guardando perfil:", e);
    alert("Error al guardar els canvis");
  }
};



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          {/* Botó Enrere */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>

          {/* Foto de perfil */}
          <Image
            source={avatarDefault}
            style={styles.profileImage}
          />


          {/* Formulari */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nom</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={nom}
                  onChangeText={setNom}
                  placeholder="Nom"
                />

                <Ionicons name="create-outline" size={20} color="#444" />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correu electrònic</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                />

                <Ionicons name="create-outline" size={20} color="#444" />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contacte</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={setphone}
                  placeholder="+34 123 45 67 89"
                />

                <Ionicons name="create-outline" size={20} color="#444" />
              </View>
            </View>

            {/* Botons */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ElsMeusPosts')}
            >
              <Text style={styles.buttonText}>Els meus posts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={confirmarTancamentSessio}>
              <Text style={styles.buttonText}>Tanca sessió</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={guardarCanvis}>
              <Text style={styles.buttonText}>Guardar canvis</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
      

      {/* 🔴 Popup personalitzat */}
      <Modal
        visible={mostrarPopup}
        transparent
        animationType="fade"
        onRequestClose={() => setMostrarPopup(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Tancar sessió</Text>
            <Text style={styles.modalMessage}>Estàs segur que vols tancar la sessió?</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setMostrarPopup(false)}
              >
                <Text style={styles.modalButtonText}>Cancel·lar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={tancarSessio}
              >
                <Text style={styles.modalButtonText}>Sí, tancar sessió</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}
