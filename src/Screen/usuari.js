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

export default function Usuari({ navigation }) {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

  const confirmarTancamentSessio = () => {
    setMostrarPopup(true);
  };

  const tancarSessio = () => {
    setMostrarPopup(false);
    navigation.navigate('Identificacio');
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
          <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.profileImage} />

          {/* Formulari */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nom d’usuari</Text>
              <View style={styles.inputRow}>
                <TextInput style={styles.input} placeholder="User" placeholderTextColor="#ccc" />
                <Ionicons name="create-outline" size={20} color="#444" />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correu electrònic</Text>
              <View style={styles.inputRow}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
                <Ionicons name="create-outline" size={20} color="#444" />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contacte</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="+34 123 45 67 89"
                  placeholderTextColor="#ccc"
                />
                <Ionicons name="create-outline" size={20} color="#444" />
              </View>
            </View>

            {/* Botons */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('elsMeusPosts')}
            >
              <Text style={styles.buttonText}>Els meus posts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={confirmarTancamentSessio}>
              <Text style={styles.buttonText}>Tanca sessió</Text>
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
