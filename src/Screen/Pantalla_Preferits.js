// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/Style_TapTopBar.js";
import preferitsStyles from "../Styles/Style_Preferits.js"; // 👈 Nuevos estilos
import Celda from "../Components/Celda.js";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { app } from "../../Firebase"; // 👈 ajusta la ruta


export default function Pantalla_Preferits() {
  const navigation = useNavigation();
  const auth = getAuth(app);
  const db = getFirestore(app);


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

  const [postsPreferits, setPostsPreferits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  cargarPreferits();
}, []);


  // 🔹 FUNCIÓN PARA MANEJAR EL CLICK EN UNA CELDA
  const handlePressCelda = (item) => {
    // navigation.navigate("Pantalla_PostDetalle", { postId: item.id });
  };

  // 🔄 CARGAR POSTS PREFERIDOS DESDE FIREBASE
  const cargarPreferits = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      // 1️⃣ Obtener documento del usuario
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        console.log("Usuario no encontrado");
        return;
      }

      const favoritosIds = userSnap.data().favorites || [];

      if (favoritosIds.length === 0) {
        setPostsPreferits([]);
        return;
      }

      // 2️⃣ Obtener los posts cuyos ID estén en favorites
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("__name__", "in", favoritosIds));
      const querySnap = await getDocs(q);

      const posts = querySnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setPostsPreferits(posts);

    } catch (error) {
      console.error("Error cargando preferits:", error);
    } finally {
      setLoading(false);
    }
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