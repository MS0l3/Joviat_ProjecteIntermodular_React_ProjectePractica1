// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/Style_TapTopBar.js";
import preferitsStyles from "../Styles/Style_Preferits.js"; // 👈 Nuevos estilos
import Celda from "./Celda.js";

export default function Pantalla_Preferits() {
  const navigation = useNavigation();

  // 💡 CONSTANTE RETROCESO - En Preferits usamos modo ajustes (engranaje)
  const isSettingsMode = true;

  // 🔄 FUNCIONALIDAD DINÁMICA DEL BOTÓN
  const handleButtonPress = () => {
    if (isSettingsMode) {
      navigation.navigate("Configuracio");
    } else {
      navigation.goBack();
    }
  };

  // 🔹 NOMBRE DE LA PANTALLA A LA QUE LLEVA EL BOTÓN DE LA MARCA:
  const pantallaMarca = "Pantalla_TapTopBar";

  // 🔹 NOMBRE DE LA PANTALLA DEL USUARIO:
  const pantallaUsuario = "Usuari";

  // 🔹 ESTADO DE LA TABBAR: selecciona cuál está activo
  const [selectedTab, setSelectedTab] = useState("Preferits");

  // 🔹 DATOS DE EJEMPLO PARA LAS CELDAS (con URLs reales)
  const [postsPreferits, setPostsPreferits] = useState([
    {
      id: '1',
      tipoCrimen: 'Assassinat',
      peligrosidad: 5,
      ubicacion: 'C/ Carrer Casavendrals 45',
      imagenUrl: 'https://picsum.photos/200/200?random=1'
    },
    {
      id: '2',
      tipoCrimen: 'Assetjament',
      peligrosidad: 5,
      ubicacion: 'C/ Carrer Legalitos 152',
      imagenUrl: 'https://picsum.photos/200/200?random=2'
    },
    {
      id: '3',
      tipoCrimen: 'Robatori',
      peligrosidad: 4,
      ubicacion: 'C/ Carrer de las puntañas, 15',
      imagenUrl: 'https://picsum.photos/200/200?random=3'
    },
    {
      id: '4',
      tipoCrimen: 'Baralles',
      peligrosidad: 3,
      ubicacion: 'C/ Cami del mirasol',
      imagenUrl: null
    },
    {
      id: '5',
      tipoCrimen: 'Desordre public',
      peligrosidad: 3,
      ubicacion: 'C/ Carretera San Martí',
      imagenUrl: 'https://picsum.photos/200/200?random=4'
    }
    ,
    {
      id: '6',
      tipoCrimen: 'Desordre public',
      peligrosidad: 3,
      ubicacion: 'C/ Carretera San Martí',
      imagenUrl: 'https://picsum.photos/200/200?random=4'
    }
    ,
    {
      id: '7',
      tipoCrimen: 'Desordre public',
      peligrosidad: 3,
      ubicacion: 'C/ Carretera San Martí',
      imagenUrl: 'https://picsum.photos/200/200?random=4'
    }
    ,
    {
      id: '8',
      tipoCrimen: 'Desordre public',
      peligrosidad: 3,
      ubicacion: 'C/ Carretera San Martí',
      imagenUrl: 'https://picsum.photos/200/200?random=4'
    }
    ,
    {
      id: '9',
      tipoCrimen: 'Desordre public',
      peligrosidad: 3,
      ubicacion: 'C/ Carretera San Martí',
      imagenUrl: 'https://picsum.photos/200/200?random=4'
    }
  ]);

  // 🔹 FUNCIÓN PARA MANEJAR EL CLICK EN UNA CELDA
  const handlePressCelda = (item) => {
    console.log('Celda presionada:', item);
    // navigation.navigate("Pantalla_PostDetalle", { postId: item.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* -------------------------------------------------------------
         🟥 CABECERA SUPERIOR (Botón Ajustes + Marca + Usuario)
      ------------------------------------------------------------- */}
      <View style={styles.headerContainer}>
        {/* ⚙️ BOTÓN AJUSTES */}
        <TouchableOpacity
          style={[styles.redButton, styles.settingsButton]}
          onPress={handleButtonPress}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>

        {/* 🔸 BOTÓN INVISIBLE DE LA MARCA */}
        <TouchableOpacity
          style={styles.botonMarca}
          onPress={() => navigation.navigate(pantallaMarca)}
        >
          <Text style={styles.textoMarca}>DangerZone</Text>
        </TouchableOpacity>

        {/* 👤 BOTÓN USUARIO */}
        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate(pantallaUsuario)}
        >
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* -------------------------------------------------------------
         📍 CONTENIDO PRINCIPAL - LISTA DE PREFERITS EN RECUADRO GRIS
      ------------------------------------------------------------- */}
      <View style={styles.mainContent}>
        {/* RECUADRO GRIS QUE CONTIENE LA LISTA */}
        <View style={preferitsStyles.recuadroLista}>
          {postsPreferits.length > 0 ? (
            <FlatList
              data={postsPreferits}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Celda
                  tipoCrimen={item.tipoCrimen}
                  peligrosidad={item.peligrosidad}
                  ubicacion={item.ubicacion}
                  imagenUrl={item.imagenUrl}
                  onPress={() => handlePressCelda(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={preferitsStyles.listaContent}
            />
          ) : (
            <View style={preferitsStyles.emptyState}>
              <Text style={preferitsStyles.emptyStateText}>
                Encara no tens cap post guardat als preferits
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* -------------------------------------------------------------
         🔻 MENÚ INFERIOR (TABBAR)
      ------------------------------------------------------------- */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Explorar" && styles.tabButtonActivo,
          ]}
          onPress={() => {
            setSelectedTab("Explorar");
            navigation.navigate("Pantalla_TapTopBar");
          }}
        >
          <Ionicons
            name="location-outline"
            size={20}
            color={selectedTab === "Explorar" ? "#B3261E" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === "Explorar" && styles.tabTextActivo,
            ]}
          >
            Explorar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Preferits" && styles.tabButtonActivo
          ]}
          onPress={() => setSelectedTab("Preferits")}
        >
          <Ionicons
            name="bookmark-outline"
            size={20}
            color={selectedTab === "Preferits" ? "#B3261E" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === "Preferits" && styles.tabTextActivo
            ]}
          >
            Preferits
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "AfegirAlertes" && styles.tabButtonActivo
          ]}
          onPress={() => {
            setSelectedTab("AfegirAlertes");
            navigation.navigate("AfegirPerills");
          }}
        >
          <Ionicons
            name="add-circle-outline"
            size={22}
            color={selectedTab === "AfegirAlertes" ? "#B3261E" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === "AfegirAlertes" && styles.tabTextActivo
            ]}
          >
            Afegir Alertes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}