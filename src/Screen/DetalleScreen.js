import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/Style_TapTopBar";

const { width } = Dimensions.get("window");

export default function DetalleScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  // 📌 Datos recibidos desde ListaScreen
  const {
    ubicacion = "Sin nombre",
    peligrosidad = 3,
    tipoCrimen = 1,
    coordenadas = { latitude: 41.3851, longitude: 2.1734 },
    imagenes = [
      "https://picsum.photos/seed/p1/800/400",
      "https://picsum.photos/seed/p2/800/400",
      "https://picsum.photos/seed/p3/800/400",
      "https://picsum.photos/seed/p1/800/400",
      "https://picsum.photos/seed/p2/800/400",
    ],
    descripcion = "No hay descripción disponible.",
  } = route.params || {};
  // ● ○ ○ Slider de imágenes
  const [indiceImagen, setIndiceImagen] = useState(0);

  // ⭐ ESTADO FAVORITOS
  const [fav, setFav] = useState(false);

  // 🔎 Modal de imagen ampliada
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const renderPeligrosidad = (n) => "▲".repeat(n);

  const crimenes = {
    1: "Robo",
    2: "Asalto",
    3: "Vandalismo",
    4: "Fraude",
    5: "Incendio",
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 🟥 TOP BAR—igual en todas tus pantallas */}
      <View style={[styles.headerContainer, { marginLeft: 8, marginTop: 10, paddingHorizontal: 10 }]}>
        <TouchableOpacity
          style={[styles.redButton, styles.settingsButton]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

      {/* 🔸 BOTÓN INVISIBLE DE LA MARCA */}
        <TouchableOpacity
          style={styles.botonMarca}
          onPress={() => navigation.navigate("Pantalla_TapTopBar")}
        >
          <Text style={styles.textoMarca}>DangerZone</Text>
        </TouchableOpacity>

        {/* ⭐ FAVORITOS — ESTRELLA */}
        <TouchableOpacity onPress={() => setFav(!fav)} style={{ padding: 8 }}>
          <Ionicons
          name={fav ? "star" : "star-outline"}
          size={28}
          color={fav ? "#FFD700" : "#000"}
          style={
          fav
           ? {
                 textShadowColor: "#000",
                textShadowOffset: { width: 0, height: 0 },
                  textShadowRadius: 6,
               }
             : {}
          }
        />
      </TouchableOpacity>


      </View>

      {/* 📜 CONTENIDO SCROLLEABLE */}
      <ScrollView style={{ flex: 1 }}>
        {/* 🌍 MAPA */}
        <View style={{ width: "100%", height: 240, marginTop: 10 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: coordenadas.latitude,
              longitude: coordenadas.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker coordinate={coordenadas} />
          </MapView>
        </View>

        {/* 🖼️ MINI GALERÍA HORIZONTAL */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            const totalWidth = (width * 0.45 + 10) * imagenes.length - 10; // ancho total real
            const progress = Math.min(1, x / totalWidth);
            setIndiceImagen(progress * (imagenes.length - 1));
          }}
          scrollEventThrottle={16}
          style={{ marginTop: 15, paddingLeft: 10 }}
        >
          {imagenes.map((img, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setImagenSeleccionada(img)}
              style={{ marginRight: 15 }}
            >
              <Image
                source={{ uri: img }}
                style={{
                  width: width * 0.45 + 50,
                  height: 150,
                  borderRadius: 15,
                  resizeMode: "cover",
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>


          {/* 🔘 BARRA DE PROGRESO DE IMÁGENES */}
      <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
        <View
          style={{
            height: 6,
            backgroundColor: "#D9D9D9",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              height: 6,
              width: `${(indiceImagen / (imagenes.length - 1)) * 100}%`,
              backgroundColor: "#B3261E",
            }}
          />
        </View>
      </View>

        {/* 🔎 MODAL -> IMAGEN GRANDE */}
        <Modal visible={!!imagenSeleccionada} transparent animationType="fade">
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.9)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: imagenSeleccionada }}
              style={{
                width: "90%",
                height: "70%",
                borderRadius: 20,
                resizeMode: "contain",
              }}
            />
            <TouchableOpacity
              onPress={() => setImagenSeleccionada(null)}
              style={{
                marginTop: 20,
                backgroundColor: "#B3261E",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 16, color:'#FFF'}}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* 🧾 INFO PRINCIPAL */}
        <View style={{ padding: 15 }}>
          {/* TÍTULO */}
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#B3261E", marginTop: -20 }}>
            {crimenes[tipoCrimen]}
          </Text>

          <Text style={{ fontSize: 18, marginTop: 8 }}>📍 {ubicacion}</Text>

          <Text style={{ fontSize: 18, marginTop: 8 }}>
            🔥 Peligrosidad: {renderPeligrosidad(peligrosidad)}
          </Text>

          {/* 🔘 BOTÓN COMENTARIOS */}
          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: "#B3261E",
              padding: 12,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Comentaris")} // 👈 Aquí pones tu pantalla
          >
            <Text style={{ color: "#FFF", fontSize: 16 }}>
              Ver Comentarios 💬
            </Text>
          </TouchableOpacity>

          {/* DESCRIPCIÓN */}
          <View
            style={{
              backgroundColor: "#F3F3F3",
              padding: 15,
              borderRadius: 15,
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 16, color: "#444" }}>{descripcion}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
