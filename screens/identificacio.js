import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Identificacio({ navigation }) {

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/danger_zone.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sessió</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f7',
    alignItems: 'center',
    justifyContent: 'flex-start', // 👈 col·loca el contingut cap amunt
    paddingTop: 90, // 👈 distància des de la part superior
  },
  logo: {
    width: 380,
    height: 400,
    marginBottom: -40,
  },
  button: {
    backgroundColor: '#b22222',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
