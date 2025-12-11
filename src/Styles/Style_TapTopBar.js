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
    marginTop: 10,

  },

   // 🔴 ESTILO POR DEFECTO: BOTÓN ROJO DE RETROCESO
  redButton: {
    backgroundColor: "#B3261E", // rojo
    borderRadius: 10,
    padding: 10,
    color: "#ffffffff"
  },

  // ⚙️ ESTILO ADICIONAL PARA EL MODO AJUSTES
  settingsButton: {
    backgroundColor: "#CBD5E1", // gris claro
  },

  botonMarca: {
    flex: 1,
    alignItems: "center",
  },

  // 🔸 Barra de busqueda por cuidades (centro)
  // 🔍 Buscador en la cabecera
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 45,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },

  textoMarca: {
    color: "#B3261E",
    fontSize: 20,
    fontWeight: "bold",
  },

  botonUsuario: {
    backgroundColor: "transparent",
    padding: 8,
  },


  // 📍 CONTENIDO
  mainContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "top",
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
    borderWidth: 0,
  },

  // 👤 Botón usuario (derecha)
  botonUsuario: {
    backgroundColor: "transparent",
    padding: 8,
  },

  // ==========================================================================
  // ⚙️ SWITCH MAPA / LLISTA / FILTRO DE CRÍMENES
  // ==========================================================================
  
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#555",
    borderRadius: 4,
  },

  checkboxChecked: {
    backgroundColor: "#B3261E",
    borderColor: "#B3261E",
  },
  
  switchContainer: {
    flexDirection: "row",
    backgroundColor: "#CBD5E1",
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
    position: "relative",   // <- SUPER IMPORTANTE
    zIndex: 10,   // <- PERMITE QUE EL MENÚ FLOTE POR ENCIMA
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
  textoPeligro:{
    marginLeft: 10,
    fontSize: 10,
    marginBottom: 2,
  },
  
  textoNombre:{
    marginLeft: 10,
    fontSize: 14,
  },
  Marker:{
    width: 15,
    height: 15
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
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 5,
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 6,
    borderRadius: 20,
  },

  tabButtonActivo: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF8F7", // fondo claro
    borderWidth: 1,
    borderColor: "#B3261E",
    padding: 2,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  tabText: {
    color: "#000",
    fontSize: 13,
  },

  tabTextActivo: {
    color: "#B3261E",
    fontWeight: "bold",
  },

  tabTextActivo: {
    color: "#B3261E",
    fontWeight: "bold",
  },
});