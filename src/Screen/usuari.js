import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import styles from '../Styles/Style_usuari'; // ✅ importació d'estils externs

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
