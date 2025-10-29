import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';

export default function Usuari({ navigation }) {
  useEffect(() => {
    // Amaga la barra de navegació del mòbil (Android)
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

  return (
    <View style={styles.container}>
      {/* Botó Enrere */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Foto de perfil */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }} // pots canviar per la teva imatge
        style={styles.profileImage}
      />

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
            <TextInput style={styles.input} placeholder="+34 123 45 67 89" placeholderTextColor="#ccc" />
            <Ionicons name="create-outline" size={20} color="#444" />
          </View>
        </View>

        {/* Botons */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Els meus posts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tanca sessió</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F7',
    alignItems: 'center',
    paddingTop: 90,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#b91c1c', // Vermell fosc
    borderRadius: 6,            // Arrodonit com a la imatge
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderWidth: 1,             // Petita vora fosca
    borderColor: '#7a0f0f',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4,               // Ombra per Android
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 60,
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#CBD5E1',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginLeft: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#CBD5E1',
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});
