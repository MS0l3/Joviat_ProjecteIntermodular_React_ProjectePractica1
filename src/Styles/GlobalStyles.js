// ============================================================================
// 📁 GlobalStyles.js
// ✅ Todos los estilos de la aplicación en un solo archivo
// ============================================================================

import { StyleSheet } from "react-native";

// 🎨 PALETA DE COLORES GLOBAL
const COLORS = {
  fondo: "#FFF8F7",
  gris: "#CBD5E1",
  rojo: "#B3261E",
  negro: "#000",
  blanco: "#FFF",
  peligro: "#FFB300",
};

// ============================================================================
// ✅ EXPORT DE ESTILOS GLOBALES — SIN REPETIR IMPORTS
// ============================================================================
export const STYLES = StyleSheet.create({
  // ============================ PANTALLA BASE ===============================
  pantalla: {
    flex: 1,
    backgroundColor: COLORS.fondo,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.fondo,
  },

  // =========================== TOP BAR SUPERIOR =============================

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gris,
    width: "95%",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
    marginTop: 45,
    justifyContent: "space-between",
  },

  redButton: {
    backgroundColor: COLORS.rojo,
    borderRadius: 10,
    padding: 10,
  },

  settingsButton: {
    backgroundColor: COLORS.gris,
  },

  botonMarca: { flex: 1, alignItems: "center" },
  textoMarca: { color: COLORS.rojo, fontSize: 20, fontWeight: "bold" },

  botonUsuario: { backgroundColor: "transparent", padding: 8 },

  // ============================ SWITCH MAPA / LISTA =========================
  switchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.gris,
    borderRadius: 20,
    marginVertical: 15,
    overflow: "hidden",
  },

  switchButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },

  switchButtonActivo: {
    backgroundColor: COLORS.rojo,
  },

  switchText: { color: COLORS.negro, fontWeight: "600" },
  switchTextActivo: { color: COLORS.blanco, fontWeight: "700" },

  // ============================ GRID DE CELDAS ==============================
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 12,
  },

  celda: {
    width: "31%",
    backgroundColor: COLORS.blanco,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  mapaMini: { width: "100%", height: 90 },

  textoNombre: {
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 3,
  },

  textoPeligro: {
    textAlign: "center",
    paddingBottom: 5,
    color: COLORS.peligro,
  },

  // ============================ MAPA GRANDE ================================
  mapaGrande: { flex: 1, width: "100%" },

  detalleInfo: { padding: 12, backgroundColor: COLORS.blanco, width: "100%" },
  detalleTitulo: { fontSize: 18, fontWeight: "bold", textAlign: "center" },

  // ============================ TABBAR =====================================
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.gris,
    width: "90%",
    marginBottom: 35,
    paddingVertical: 10,
    borderRadius: 25,
  },

  tabButton: { alignItems: "center", flex: 1, paddingVertical: 6 },
  tabButtonActivo: {
    backgroundColor: COLORS.fondo,
    borderWidth: 1,
    borderColor: COLORS.rojo,
    borderRadius: 20,
    padding: 2,
    marginHorizontal: 10,
  },

  tabText: { fontSize: 13 },
  tabTextActivo: { color: COLORS.rojo, fontWeight: "700" },
});
