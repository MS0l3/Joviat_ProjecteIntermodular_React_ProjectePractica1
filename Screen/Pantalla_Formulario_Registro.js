import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
  ScrollView,
  Image,

} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./Style_Formulario_Registro";
import logo from "../assets/Logo_DangerZone.png";


export default function Pantalla_Formulario_Registro() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Validaciones
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email) || email === "";
  const doPasswordsMatch = password === confirmPassword || confirmPassword === "";

  const handleRegister = () => {
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Format de correu incorrecte");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Les contrasenyes no coincideixen");
      return;
    }
    if (!accepted) {
      Alert.alert("Error", "Has d'acceptar els termes i condicions");
      return;
    }
    Alert.alert("Registrat!", "Compte creat correctament.");
  };

  return (
    <View style={styles.container}>
      {/* Botón volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Logo (pon tu imagen aquí) */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} resizeMode="contain" />
      </View>

      {/* Formulario */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Correu electronic</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="danger@danger.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!isEmailValid && (
          <Text style={styles.errorText}>Format de correu incorrecte</Text>
        )}

        <Text style={styles.label}>Contrasenya</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirma contrasenya</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Password"
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeButton}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {!doPasswordsMatch && (
          <Text style={styles.errorText}>Les contrasenyes no coincideixen</Text>
        )}

        {/* Checkbox y términos */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setAccepted(!accepted)}>
            <Ionicons
              name={accepted ? "checkbox" : "square-outline"}
              size={22}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            {"  "}He llegit i accepto els{" "}
            <Text
              style={styles.linkText}
              onPress={() => setShowModal(true)}
            >
              termins i condicions
            </Text>
          </Text>
        </View>

        {/* Botón registrar */}
        <TouchableOpacity
          style={[styles.registerButton, { opacity: accepted ? 1 : 0.6 }]}
          disabled={!accepted}
          onPress={handleRegister}
        >
          <Text style={styles.registerText}>Registrar-me</Text>
        </TouchableOpacity>
      </View>

      {/* 📜 Modal de términos */}
        <Modal transparent visible={showModal} animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Polítiques de privacitat</Text>

                    {/* 🔽 SCROLLVIEW PARA TEXTO LARGO */}
                    <View style={styles.modalScrollContainer}>
                        <ScrollView showsVerticalScrollIndicator={true}>
                        <Text style={styles.modalText}>
                            Les dades personals que introdueixis només s’utilitzaran per
                            oferir-te els serveis de l’aplicació i no es compartiran amb
                            tercers sense el teu consentiment.{"\n\n"}Només es recullen les
                            dades estrictament necessàries per al funcionament correcte de
                            l’app.{"\n\n"}Pots sol·licitar en qualsevol moment l’accés,
                            modificació o eliminació de les teves dades.{"\n\n"}L’ús de
                            l’aplicació implica l’acceptació d’aquesta política de privacitat.{"\n\n"}
                            Aquest text és només un exemple, però pots afegir tants punts com
                            vulguis. Si el contingut és molt llarg, podràs desplaçar-te cap
                            avall sense sortir del modal.{"\n\n"}Això permet llegir amb calma
                            tots els termes i condicions.
                        </Text>
                        </ScrollView>
                    </View>

                    <View style={styles.modalButtons}>
                        <Pressable
                        style={styles.modalButton}
                        onPress={() => {
                            setShowModal(false);
                            navigation.navigate("Pantalla_Seleccion");
                        }}
                        >
                        <Text style={styles.modalButtonText}>Denegar</Text>
                        </Pressable>

                        <Pressable
                        style={styles.modalButton}
                        onPress={() => {
                            setShowModal(false);
                            setAccepted(true);
                        }}
                        >
                        <Text style={styles.modalButtonText}>Acceptar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  );
}
