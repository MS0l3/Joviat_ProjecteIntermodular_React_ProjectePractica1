import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import styles from '../Styles/Style_elsMeusPosts';

export default function ElsMeusPosts({ navigation }) {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

  const dadesExemple = [
    { id: '1', titol: 'Robatori ⚠️⚠️⚠️', direccio: 'Carrer casavendrals 45' },
    { id: '2', titol: 'Baralles ⚠️⚠️', direccio: 'Carrer legalitos 152' },
    { id: '3', titol: 'Robatori ⚠️⚠️⚠️', direccio: 'Carrer de las puntañas, 15' },
    { id: '4', titol: 'Desordre públic ⚠️', direccio: 'Camí del mirasol' },
    { id: '5', titol: 'Baralles ⚠️⚠️', direccio: 'Carretera san martí' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.postItem}>
      <View>
        <Text style={styles.postTitle}>{item.titol}</Text>
        <Text style={styles.postAddress}>{item.direccio}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Capçalera */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>DangerZone</Text>
        <Ionicons name="settings-outline" size={22} color="#444" />
      </View>

      <Text style={styles.title}>Els meus posts</Text>

      {/* Contenidor llista */}
      <View style={styles.listContainer}>
        <FlatList
          data={dadesExemple}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="location-outline" size={20} color="#000" />
          <Text style={styles.navText}>Explorar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="heart-outline" size={20} color="#000" />
          <Text style={styles.navText}>Preferits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="add-outline" size={22} color="#000" />
          <Text style={styles.navText}>Afegir Alertes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
