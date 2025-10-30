import React, { useEffect, useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import { Picker } from '@react-native-picker/picker';
import styles from '../Styles/Style_configuracio'; // ✅ Ruta corregida

export default function Configuracio({ navigation }) {
  const [vibracio, setVibracio] = useState(false);
  const [daltonic, setDaltonic] = useState('');
  const [modeFosc, setModeFosc] = useState(false);
  const [anonim, setAnonim] = useState(false);
  const [tamanyLletra, setTamanyLletra] = useState(14);

  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

  return (
    <View style={styles.container}>
      {/* Capçalera */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>DangerZone</Text>
        <Ionicons name="settings-outline" size={30} color="#444" style={{ marginRight: 10 }} />
      </View>

      {/* Notificacions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificacions</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Vibració</Text>
          <Switch value={vibracio} onValueChange={setVibracio} thumbColor={vibracio ? '#b91c1c' : '#ccc'} />
        </View>
      </View>

      {/* Mode daltònic */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mode daltònic</Text>
        <Text style={[styles.label, { marginBottom: 5 }]}>Tipus de daltonisme</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={daltonic}
            onValueChange={(value) => setDaltonic(value)}
            style={{ height: 50 }}
          >
            <Picker.Item label="Protanopia" value="protanopia" />
            <Picker.Item label="Deuteranopia" value="deuteranopia" />
            <Picker.Item label="Tritanopia" value="tritanopia" />
          </Picker>
        </View>
      </View>

      {/* Mode fosc */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personalització</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Mode fosc</Text>
          <Switch value={modeFosc} onValueChange={setModeFosc} thumbColor={modeFosc ? '#b91c1c' : '#ccc'} />
        </View>
      </View>

      {/* Visualització */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visualització</Text>
        <Text style={[styles.label, { marginBottom: 8 }]}>Tamany de la lletra</Text>
        <Slider
          minimumValue={10}
          maximumValue={30}
          step={1}
          value={tamanyLletra}
          onValueChange={setTamanyLletra}
          minimumTrackTintColor="#b91c1c"
          maximumTrackTintColor="#ddd"
          style={styles.slider}
        />
        <Text style={styles.sliderValue}>{tamanyLletra}</Text>
      </View>

      {/* Privacitat */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacitat</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Activar mode anònim</Text>
          <Switch value={anonim} onValueChange={setAnonim} thumbColor={anonim ? '#b91c1c' : '#ccc'} />
        </View>
      </View>
    </View>
  );
}
