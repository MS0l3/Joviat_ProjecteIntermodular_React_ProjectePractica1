// ============================================================================
// 🎨 Style_TapTopBar.js
// ✅ Estilos globales para la pantalla con barra superior (TopBar),
// switch Mapa/Llista y barra inferior (TabBar).
// ============================================================================

import { StyleSheet } from "react-native";

// ============================================================================
// 💡 NOTA IMPORTANTE
// Este archivo debe importarse así en la pantalla:
// import styles from "../Styles/Style_TapTopBar.js";
// ============================================================================

export default StyleSheet.create({
  // ==========================================================================
  // 🧱 CONTENEDOR PRINCIPAL
  // ==========================================================================
      container: {
    flex: 1,
    backgroundColor: "#FEF7FF",
    justifyContent: "space-between", // importante
    alignItems: "center",
  },

  // ==========================================================================
  // 🟥 CABECERA SUPERIOR (TopBar)
  // Contiene el botón rojo / ajustes, la marca central y el botón usuario
  // ==========================================================================
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#CBD5E1", // gris suave
    width: "95%",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 45,

  },

  // 🔴 Botón rojo por defecto (retroceso)
  redButton: {
    backgroundColor: "#B3261E",
    borderRadius: 10,
    padding: 10,
    color: "#ffffffff"
  },

  // ⚙️ Modo ajustes (botón gris)
  settingsButton: {
    backgroundColor: "#CBD5E1",
  },

  // 🔸 Barra de busqueda por cuidades (centro)
  searchContainer: {
  flex: 1,
  marginHorizontal: 10,
},

  textoMarca: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },

  botonUsuario: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ─── CONTINGUT CENTRAL ───────────────────────── */
  mainContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 80, // deixa espai per la tabBar
  },

  /* ─── CAIXA CENTRAL (per AfegirPerills) ───────── */
  dangerBox: {
    width: "92%",
    backgroundColor: "#CBD5E1",
    borderRadius: 12,
    padding: 12,
  },

  addImageButton: {
    backgroundColor: "#B3261E",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  imageThumbnail: {
    width: 72,
    height: 72,
    borderRadius: 8,
    marginRight: 8,
  },

  removeImageButton: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#000000AA",
    borderRadius: 10,
    padding: 2,
  },

  /* ─── MULTISELECT PILLS ───────────────────────── */
  tagPill: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  tagPillActive: {
    backgroundColor: "#B3261E",
    borderColor: "#7a0f0f",
  },

  tagText: {
    fontWeight: "600",
    color: "#000",
  },

  tagTextActive: {
    color: "#fff",
  },

  /* ─── DESCRIPCIÓ ──────────────────────────────── */
  descriptionBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
    minHeight: 80,
    textAlignVertical: "top",
  },

  /* ─── MAP PLACEHOLDER ─────────────────────────── */
  mapBox: {
    height: 140,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },

  /* ─── BOTÓ AFEGIR ─────────────────────────────── */
  addButton: {
    backgroundColor: "#B3261E",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  /* ─── BARRA INFERIOR (TABTOPBAR) ──────────────── */
  tabTopBarTitle: {
    color: "#B3261E",
    fontSize: 20,
    fontWeight: "bold",
  },
searchInput: {
  backgroundColor: "#FFF",
  height: 40,
  borderRadius: 10,
  paddingHorizontal: 12,
  fontSize: 16,
  borderColor: "#B3261E",
  borderWidth: 1,
},

  // 👤 Botón usuario (derecha)
  botonUsuario: {
    backgroundColor: "transparent",
    padding: 8,
  },

  // ==========================================================================
  // ⚙️ SWITCH MAPA / LLISTA
  // ==========================================================================
  switchContainer: {
    flexDirection: "row",
    backgroundColor: "#CBD5E1",
    borderRadius: 20,
    marginVertical: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },

  switchButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },

  switchButtonActivo: {
    backgroundColor: "#B3261E", // rojo DangerZone
    borderRadius: 20,
  },

  switchText: {
    color: "#000",
    fontWeight: "600",
  },

  switchTextActivo: {
    color: "#FFF",
  },

  // ==========================================================================
  // 📍 CONTENIDO CENTRAL (mainContent)
  // Aquí se monta la pantalla de Lista o Mapa según el switch
  // ==========================================================================

  // 📋 ESTILOS PARA LISTA DE CELDAS Y GRID
  listaContainer: {
    flex: 1,
    backgroundColor: "#FEF7FF",
    paddingBottom: 0, // deja espacio para la TabBar
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  celdaWrapper: {
    width: "31%", // 3 columnas exactas
    marginVertical: 6,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
    elevation: 3, // sombra ligera en Android
  },


  
  // ==========================================================================
  // 🔻 TABBAR INFERIOR (3 botones)
  // ==========================================================================

  mainContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "top",
  },


  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#CBD5E1",
    width: "90%",
    alignSelf: "center",
    marginBottom: 50,
    paddingVertical: 10,
    borderRadius: 25,
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 6,
    borderRadius: 20,
  },

  tabButtonActivo: {
    backgroundColor: "#FFF8F7", // fondo claro
    borderWidth: 1,
    borderColor: "#B3261E",
    padding: 2,
    marginHorizontal: 10,
  },

  tabText: {
    color: "#000",
    fontSize: 13,
  },

  tabTextActivo: {
    color: "#B3261E",
    fontWeight: "bold",
  },
});
