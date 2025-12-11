import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../Styles/Style_Formulario_Registro";
import logo from "../../assets/Logo_DangerZone.png";

export default function Pantalla_Formulario_Registro() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      {/* 🔙 Botón para volver */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate("Identificacio");
          }
        }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* 🧩 Contenedor principal con teclado estable */}
      <KeyboardAwareScrollView
  contentContainerStyle={styles.scrollContainer}
  enableOnAndroid={true}
  extraScrollHeight={30}
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator={false}
>
  <View style={styles.logoContainer}>
    <Image source={logo} style={styles.logoImage} resizeMode="contain" />
  </View>

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
        <Text style={styles.linkText} onPress={() => setShowModal(true)}>
          termins i condicions
        </Text>
      </Text>
    </View>

    <TouchableOpacity
      style={[styles.registerButton, { opacity: accepted ? 1 : 0.6 }]}
      disabled={!accepted}
      onPress={handleRegister}
    >
      <Text style={styles.registerText}>Registrar-me</Text>
    </TouchableOpacity>
  </View>
</KeyboardAwareScrollView>

            {/* 📜 Modal de términos */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Polítiques de privacitat</Text>

            {/* 🔹 Scroll que funciona sin teclado activo */}
            <ScrollView
              style={styles.modalScroll}
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.modalText}>
                {`Benvingut a la nostra aplicació.\n\nAquest document explica com gestionem les teves dades personals.\n
1. No compartim la teva informació amb tercers sense el teu consentiment.\n
2. Pots sol·licitar la supressió del teu compte en qualsevol moment.\n
3. Utilitzem cookies per millorar l'experiència d'usuari.\n
4. Els teus correus electrònics només s'utilitzaran per comunicacions essencials.\n\n
5. Si la seguretat de les teves dades es veu compromesa, t'ho notificarem immediatament.\n
6. Si llelgeixes aquest text, tens que posarnos un 10 per persona en el grup.\n
Acceptar aquests termes és necessari per utilitzar l'aplicació.\n
Gràcies per confiar en nosaltres.\n\n(Text d'exemple per provar el desplaçament en modal)\n`.repeat(3)}
              </Text>
            </ScrollView>

            <View style={styles.modalButtons}>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate("Identificacio");
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
