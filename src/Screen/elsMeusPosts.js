// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { app, db } from "../../Firebase";

import styles from "../Styles/Style_TapTopBar.js";
import meusPostsStyles from "../Styles/Style_elsMeusPosts.js";
import Celda from "../Components/Celda.js";

export default function ElsMeusPosts() {
  const navigation = useNavigation();
  const auth = getAuth(app);

  // 💡 CONSTANTE RETROCESO
  const isSettingsMode = false;

  const handleButtonPress = () => {
    if (isSettingsMode) {
      navigation.navigate("Configuracio");
    } else {
      navigation.goBack();
    }
  };

  // 🔹 NOMBRE DE LAS PANTALLAS
  const pantallaMarca = "Pantalla_TapTopBar";
  const pantallaUsuario = "Usuari";

  // 🔹 ESTADO TABBAR
  const [selectedTab, setSelectedTab] = useState("");

  // 🔹 POSTS DEL USUARIO
  const [meusPosts, setMeusPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 CARGAR POSTS DEL USUARIO DESDE FIREBASE
  useEffect(() => {
    const cargarMeusPosts = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          setMeusPosts([]);
          return;
        }

        const q = query(
          collection(db, "posts"),
          where("createdBy", "==", user.uid)
        );

        const snap = await getDocs(q);
        const posts = [];

        snap.forEach(docSnap => {
          posts.push({
            id: docSnap.id,
            ...docSnap.data(),
          });
        });

        setMeusPosts(posts);
      } catch (error) {
        console.error("Error cargando mis posts:", error);
        setMeusPosts([]);
      } finally {
        setLoading(false);
      }
    };

    cargarMeusPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* -------------------------------------------------------------
         🟥 CABECERA SUPERIOR
      ------------------------------------------------------------- */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[styles.settingsButton, styles.redButton]}
          onPress={handleButtonPress}
        >
          <Ionicons
            name={isSettingsMode ? "settings-outline" : "arrow-back-outline"}
            size={24}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonMarca}
          onPress={() => navigation.navigate(pantallaMarca)}
        >
          <Text style={styles.textoMarca}>DangerZone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate(pantallaUsuario)}
        >
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* -------------------------------------------------------------
         🏷️ TÍTOL
      ------------------------------------------------------------- */}
      <Text style={meusPostsStyles.titol}>Els meus posts</Text>

      {/* -------------------------------------------------------------
         📍 CONTENIDO PRINCIPAL
      ------------------------------------------------------------- */}
      <View style={styles.mainContent}>
        <View style={meusPostsStyles.recuadroLista}>
          {meusPosts.length > 0 ? (
            <FlatList
              data={meusPosts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Celda
                  tipoCrimen={item.tipoCrimen}
                  peligrosidad={item.peligrosidad}
                  ubicacion={item.ubicacion}
                  imagenUrl={item.imagenUrl}
                  coordenadas={item.coordenadas}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={meusPostsStyles.listaContent}
            />
          ) : (
            <View style={meusPostsStyles.emptyState}>
              <Text style={meusPostsStyles.emptyStateText}>
                Encara no has publicat cap alerta
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* -------------------------------------------------------------
         🔻 MENÚ INFERIOR
      ------------------------------------------------------------- */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Explorar" && styles.tabButtonActivo
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
              selectedTab === "Explorar" && styles.tabTextActivo
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
          onPress={() => {
            setSelectedTab("Preferits");
            navigation.navigate("Pantalla_Preferits");
          }}
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
