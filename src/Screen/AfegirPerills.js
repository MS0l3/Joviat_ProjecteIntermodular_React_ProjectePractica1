import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import styles from "../Styles/Style_TapTopBar";

export default function AfegirPerills() {
  const navigation = useNavigation();

  // Formulari
  const [selectedTags, setSelectedTags] = useState([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Etiquetes amb perillositat
  const tags = [
    { key: "assetjament", label: "Assetjament", level: 2 },
    { key: "baralles", label: "Baralles", level: 3 },
    { key: "assassinat", label: "Assassinat", level: 5 },
    { key: "robatori", label: "Robatori", level: 4 },
    { key: "desordre", label: "Desordre públic", level: 1 },
  ];

  // Oculta navbar Android
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden").catch(() => {});
    NavigationBar.setBehaviorAsync("overlay-swipe").catch(() => {});
  }, []);

  const toggleTag = (key) => {
    setSelectedTags((s) =>
      s.includes(key) ? s.filter((t) => t !== key) : [...s, key]
    );
  };

  const highestLevel = selectedTags.length
    ? Math.max(
        ...selectedTags.map((k) => tags.find((t) => t.key === k)?.level ?? 0)
      )
    : 0;

  // Función para renderizar triángulos - VERSIÓN CORRECTA
  const renderPeligrosidad = (nivel) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Ionicons
        key={i}
        name="warning"
        size={16}
        color={i < nivel ? "#B3261E" : "#CBD5E1"}
        style={{ marginHorizontal: 2 }}
      />
    ));
  };

  // Selecció d'imatges
  const pickImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
      });

      if (!result.canceled) {
        const newUris = result.assets
          ? result.assets.map((a) => a.uri)
          : [result.uri];
        setImages((prev) => [...prev, ...newUris]);
      }
    } catch (e) {
      console.log("Image pick error:", e);
    }
  };

  const openImagePreview = (uri) => {
    setSelectedImage(uri);
    setModalVisible(true);
  };

  const closeImagePreview = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const removeImage = (idx) =>
    setImages((prev) => prev.filter((_, i) => i !== idx));

  const isSettingsMode = true;

  const handleButtonPress = () => {
    if (isSettingsMode) {
      navigation.navigate("Configuracio");
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      {/* 🔺 TOP BAR */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[styles.redButton, styles.settingsButton]}
          onPress={handleButtonPress}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.botonMarca}>
          <Text style={styles.textoMarca}>DangerZone</Text>
        </View>

        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate("Usuari")}
        >
          <Ionicons name="person-circle-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* TÍTOL */}
      <Text
        style={{
          textAlign: "center",
          color: "#000",
          fontSize: 20,
          fontWeight: "700",
          marginVertical: 8,
        }}
      >
        Afegir perill
      </Text>

      {/* 🔳 CAIXA CENTRAL */}
      <View style={styles.mainContent}>
        <ScrollView
          contentContainerStyle={{
            width: "92%",
            borderRadius: 12,
            padding: 12,
            backgroundColor: "#CBD5E1",
            alignSelf: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* TITOL + BOTÓ FOTO */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "700", color: "#000" }}>
              Tipus de perill
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#B3261E",
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
              }}
              onPress={pickImages}
            >
              <Ionicons name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* DESPLEGABLE */}
          <TouchableOpacity
            onPress={() => setDropdownOpen(!dropdownOpen)}
            activeOpacity={0.9}
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              minHeight: 50,
            }}
          >
            {selectedTags.length === 0 ? (
              <Text style={{ color: "#666" }}>Selecciona tipus de perill...</Text>
            ) : (
              selectedTags.map((k) => {
                const tag = tags.find((t) => t.key === k);
                return (
                  <View
                    key={k}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#FEE2E2",
                      borderColor: "#B3261E",
                      borderWidth: 1,
                      borderRadius: 20,
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                      marginRight: 6,
                      marginBottom: 6,
                    }}
                  >
                    <Text style={{ color: "#B3261E", fontWeight: "600", marginRight: 8 }}>
                      {tag?.label}
                    </Text>
                    <TouchableOpacity
                      onPress={() => toggleTag(k)}
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 50,
                        backgroundColor: "#B3261E",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons name="checkmark" size={14} color="#fff" />
                    </TouchableOpacity>
                  </View>
                );
              })
            )}
            <Ionicons
              name={dropdownOpen ? "chevron-up" : "chevron-down"}
              size={18}
              color="#000"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>

          {dropdownOpen && (
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#ccc",
                marginTop: 6,
                paddingVertical: 6,
              }}
            >
              {tags.map((t) => {
                const active = selectedTags.includes(t.key);
                return (
                  <TouchableOpacity
                    key={t.key}
                    onPress={() => toggleTag(t.key)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 8,
                      paddingHorizontal: 10,
                      backgroundColor: active ? "#FEE2E2" : "#fff",
                    }}
                  >
                    <View
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: active ? "#B3261E" : "#999",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                        backgroundColor: active ? "#B3261E" : "transparent",
                      }}
                    >
                      {active && <Ionicons name="checkmark" size={14} color="#fff" />}
                    </View>
                    <Text style={{ color: "#000" }}>{t.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

          {/* TRIANGLES - CORREGIDO */}
          <View style={{ alignItems: "center", marginVertical: 12 }}>
            {highestLevel === 0 ? (
              <Text style={{ color: "#333" }}>Cap perill seleccionat</Text>
            ) : (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginRight: 8, color: "#000", fontWeight: "600" }}>
                  Nivell de perill:
                </Text>
                {renderPeligrosidad(highestLevel)}
              </View>
            )}
          </View>

          {/* DESCRIPCIÓ */}
          <Text style={{ fontWeight: "700", color: "#000", marginTop: 8 }}>
            Descripció
          </Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Descripció del perill..."
            placeholderTextColor="#666"
            multiline
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 10,
              marginTop: 8,
              minHeight: 80,
              textAlignVertical: "top",
            }}
          />

          {/* IMATGES */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12, marginBottom: 10 }}>
            {images.length === 0 ? (
              <View
                style={{
                  width: 140,
                  height: 140,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 12,
                  overflow: "hidden",
                  backgroundColor: "#e5e5e5",
                }}
              >
                <Image
                  source={require("../../assets/placeholder.png")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            ) : (
              images.map((uri, i) => (
                <View key={i} style={{ marginRight: 12 }}>
                  <TouchableOpacity onPress={() => openImagePreview(uri)}>
                    <Image
                      source={{ uri }}
                      style={{ width: 120, height: 120, borderRadius: 12 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => removeImage(i)}
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      width: 15,
                      backgroundColor: "#0009",
                      borderRadius: 12,
                      padding: 3,
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 12 }}>x</Text>
                  </TouchableOpacity>
                </View>
              ))
            )}
          </ScrollView>

          {/* MAPA (placeholder) */}
          <View
            style={{
              height: 150,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 12,
            }}
          >
            <Text style={{ color: "#666" }}>Mapa de la ubicació (placeholder)</Text>
          </View>

          {/* BOTÓ AFEGIR */}
          <TouchableOpacity
            style={{
              backgroundColor: "#B3261E",
              paddingVertical: 12,
              borderRadius: 10,
              alignItems: "center",
              marginBottom: 10,
            }}
            onPress={() => {
              console.log("Afegit:", { selectedTags, description, images });
              alert("Perill afegit (simulat)");
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
              Afegir perill
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* MENÚ INFERIOR */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate("Pantalla_TapTopBar")}
        >
          <Ionicons name="location-outline" size={20} color="#000" />
          <Text style={styles.tabText}>Explorar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate("Pantalla_Preferits")}
        >
          <Ionicons name="bookmark-outline" size={20} color="#000" />
          <Text style={styles.tabText}>Preferits</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButtonActivo}>
          <Ionicons name="add-circle-outline" size={26} color="#B3261E" />
          <Text style={styles.tabText}>Afegir Alertes</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL DE PREVISIÓ DE FOTO */}
      {selectedImage && (
        <Modal visible={modalVisible} transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.9)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 40,
                right: 20,
                backgroundColor: "#0007",
                padding: 10,
                borderRadius: 30,
                zIndex: 10,
              }}
              onPress={closeImagePreview}
            >
              <Ionicons name="close" size={32} color="#fff" />
            </TouchableOpacity>

            <Image
              source={{ uri: selectedImage }}
              style={{ width: "90%", height: "70%", borderRadius: 12 }}
              resizeMode="contain"
            />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}