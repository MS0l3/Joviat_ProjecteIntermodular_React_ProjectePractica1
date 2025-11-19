import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "../Styles/Style_TapTopBar"; // reutilitzem els estils base


export default function AfegirPerills() {
  const navigation = useNavigation();
  const [selectedTags, setSelectedTags] = useState([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  // etiquetes amb nivell
  const tags = [
    { key: "assetjament", label: "Assetjament", level: 2 },
    { key: "baralles", label: "Baralles", level: 3 },
    { key: "assassinat", label: "Assassinat", level: 5 },
    { key: "robatori", label: "Robatori", level: 4 },
    { key: "desordre", label: "Desordre públic", level: 1 },
  ];

  const toggleTag = (key) => {
    setSelectedTags((s) =>
      s.includes(key) ? s.filter((t) => t !== key) : [...s, key]
    );
  };

  const highestLevel = selectedTags.length
    ? Math.max(
        ...selectedTags.map(
          (k) => tags.find((t) => t.key === k)?.level ?? 0
        )
      )
    : 0;

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsMultipleSelection: true,
    });
    if (!result.canceled) {
      const newUris = result.assets ? result.assets.map((a) => a.uri) : [result.uri];
      setImages((prev) => [...prev, ...newUris]);
    }
  };

  const removeImage = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TOP BAR (reutilitza l'estil) */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.redButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.botonMarca}>
          <Text style={styles.textoMarca}>DangerZone</Text>
        </View>

        <TouchableOpacity style={styles.botonUsuario} onPress={() => navigation.navigate("Pantalla_Usuario")}>
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* títol petit */}
      <Text style={{ textAlign: "center", color: "#000", fontSize: 20, fontWeight: "700", marginVertical: 8 }}>
        Afegir perill
      </Text>

      {/* CONTINGUT: caixa central amb fons igual al header */}
      <View style={styles.mainContent}>
        <ScrollView
          contentContainerStyle={{
            width: "92%",
            borderRadius: 12,
            padding: 12,
            backgroundColor: "#CBD5E1", // mateix color que headerContainer (Style_TapTopBar)
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* fila superior: botó afegir imatges (esquerra) + carrusel (dreta) */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#B3261E",
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
                marginRight: 10,
              }}
              onPress={pickImages}
            >
              <Ionicons name="camera" size={18} color="#fff" />
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
              {images.length === 0 ? (
                <View style={{ paddingVertical: 6 }}>
                  <Text style={{ color: "#333" }}>No hi ha imatges</Text>
                </View>
              ) : (
                images.map((uri, i) => (
                  <View key={i} style={{ marginRight: 8 }}>
                    <Image source={{ uri }} style={{ width: 72, height: 72, borderRadius: 8 }} />
                    <TouchableOpacity
                      onPress={() => removeImage(i)}
                      style={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                        backgroundColor: "#000000AA",
                        borderRadius: 10,
                        padding: 2,
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 12 }}>x</Text>
                    </TouchableOpacity>
                  </View>
                ))
              )}
            </ScrollView>
          </View>

          {/* SELECTOR MULTI: etiquetes com pills */}
          <Text style={{ fontWeight: "700", color: "#000", marginBottom: 8 }}>Tipus de perill</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
            {tags.map((t) => {
              const active = selectedTags.includes(t.key);
              return (
                <TouchableOpacity
                  key={t.key}
                  onPress={() => toggleTag(t.key)}
                  style={{
                    backgroundColor: active ? "#B3261E" : "#fff",
                    borderColor: active ? "#7a0f0f" : "#ddd",
                    borderWidth: 1,
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 20,
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                >
                  <Text style={{ color: active ? "#fff" : "#000", fontWeight: "600" }}>{t.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* TRIANGLES segons nivell maxim */}
          <View style={{ alignItems: "center", marginVertical: 6 }}>
            {highestLevel === 0 ? (
              <Text style={{ color: "#333" }}>Cap perill seleccionat</Text>
            ) : (
              <View style={{ flexDirection: "row" }}>
                {Array.from({ length: highestLevel }).map((_, i) => (
                  <Text key={i} style={{ color: "#B3261E", fontSize: 20, marginHorizontal: 3 }}>▲</Text>
                ))}
              </View>
            )}
          </View>

          {/* DESCRIPCIÓ */}
          <Text style={{ fontWeight: "700", color: "#000", marginTop: 8 }}>Descripció</Text>
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

          {/* MAPA (placeholder) */}
          <View style={{ height: 140, backgroundColor: "#EFEFEF", borderRadius: 10, justifyContent: "center", alignItems: "center", marginVertical: 12 }}>
            <Text style={{ color: "#666" }}>Mapa de la ubicació (placeholder)</Text>
          </View>

          {/* BOTÓ AFEGIR */}
          <TouchableOpacity
            style={{
              backgroundColor: "#B3261E",
              paddingVertical: 12,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => {
              // placeholder: aquí guardaràs el post
              console.log("Afegir: ", { selectedTags, description, images });
              // feedback senzill
              alert("Perill afegit (simulat)");
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>Afegir perill</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* TABBAR (reutilitza estils) */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => { navigation.navigate("Pantalla_Explorar"); }}>
          <Ionicons name="location-outline" size={20} color="#000" />
          <Text style={styles.tabText}>Explorar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} onPress={() => { navigation.navigate("Pantalla_Preferits"); }}>
          <Ionicons name="bookmark-outline" size={20} color="#000" />
          <Text style={styles.tabText}>Preferits</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} onPress={() => { /* ja estem a Afegir */ }}>
          <Ionicons name="add-circle-outline" size={26} color="#B3261E" />
          <Text style={styles.tabText}>Afegir Alertes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
