// ============================================================================
// 📁 GlobalStyles.js — archivo único de estilos para toda la app
// ============================================================================
// Incluye colores, fuentes, grids, botones, mapa, topbar, tabbar, etc.
// Se importa como:  import { STYLES } from "../Styles/GlobalStyles";
// ============================================================================

import { StyleSheet } from "react-native";

// 🎨 PALETA DE COLORES PRINCIPAL
const COLORS = {
  fondo: "#F6EDED",    // color de fondo general
  blanco: "#FFFFFF",
  negro: "#000000",
  grisClaro: "#CBD5E1",
  grisMedio: "#A1A1A1",
  grisOscuro: "#707070",
  rojo: "#B3261E",
  naranja: "#FF9800",
};

// ⚙️ MEDIDAS GENERALES
const SIZES = {
  border: 10,
  padding: 10,
  fontXS: 10,
  fontSM: 12,
  fontMD: 14,
  fontLG: 18,
  mapMini: 70, // altura mini mapa
};

// ============================================================================
// ✅ ESTILOS GLOBALES (para toda la app)
// ============================================================================

export const STYLES = StyleSheet.create({
  // ============================ PANTALLA BASE ===============================
  pantalla: {
    flex: 1,
    backgroundColor: COLORS.fondo,
  },

  // ========================================================================
  // 🗂️ GRID DE UBICACIONES
  // ========================================================================
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },

  // 🔲 Cada celda de mapa
  celda: {
    width: "31%", // tres por fila
    backgroundColor: COLORS.blanco,
    borderRadius: 12,
    marginVertical: 8,
    overflow: "hidden",
    elevation: 3, // sombra
  },

  // ========================================================================
  // 🗺️ MAPA EN CELDA
  // ========================================================================
  mapaContainer: {
    width: "100%",
    aspectRatio: 1, // 🔲 cuadrado perfecto
  },

  mapaMini: {
    width: "100%",
    height: "100%",
  },

  // ========================================================================
  // 🏷️ PIE INFORMATIVO DE LA CELDA
  // ========================================================================
  celdaPie: {
    backgroundColor: COLORS.blanco,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderTopWidth: 1,
    borderColor: COLORS.gris,
  },

  textoNombre: {
    fontWeight: "500",
    fontSize: 12,
    textAlign: "left",
    color: COLORS.negro,
  },

  textoPeligro: {
    fontSize: 12,
    textAlign: "left",
  },

  // =========================== TOP BAR SUPERIOR =============================
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.grisClaro,
    width: "95%",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginTop: 45,
    alignSelf: "center",
  },

  redButton: {
    backgroundColor: COLORS.rojo,
    borderRadius: SIZES.border,
    padding: 10,
  },

  settingsButton: {
    backgroundColor: COLORS.grisClaro,
    borderRadius: SIZES.border,
    padding: 10,
  },

  botonMarca: {
    flex: 1,
    alignItems: "center",
  },

  textoMarca: {
    color: COLORS.rojo,
    fontSize: SIZES.fontLG,
    fontWeight: "bold",
  },

  botonUsuario: {
    backgroundColor: COLORS.blanco,
    padding: 8,
    borderRadius: SIZES.border,
  },

  // ============================ SWITCH MAPA / LISTA =========================
  switchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.grisClaro,
    borderRadius: 20,
    marginVertical: 15,
    overflow: "hidden",
    width: "90%",
    alignSelf: "center",
  },

  switchButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },

  switchButtonActivo: {
    backgroundColor: COLORS.rojo,
  },

  switchText: {
    color: COLORS.negro,
    fontWeight: "600",
  },

  switchTextActivo: {
    color: COLORS.blanco,
    fontWeight: "700",
  },

  // ============================================================================
  // 🗺️ MAPA GRANDE Y DETALLE
  // ============================================================================
  mapaDetalleContainer: {
    width: "100%",
    height: 300, // altura del mapa grande
    borderBottomWidth: 1,
    borderColor: "#CCC",
  },

  mapaGrande: {
    flex: 1,
  },

  // 🧾 Información del detalle debajo del mapa
  detalleInfo: {
    padding: 16,
    backgroundColor: "#FFFFFF",
  },

  detalleTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#B3261E",
  },

  textoPeligroDetalle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
    color: "#FFB300",
  },

  detalleUbicacion: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
  },

  detalleDescripcion: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
    color: "#333",
  },

  // ============================ TAB BAR INFERIOR ============================
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.grisClaro,
    width: "90%",
    alignSelf: "center",
    marginBottom: 25,
    paddingVertical: 8,
    borderRadius: 25,
  },

  tabButton: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 6,
  },

  tabButtonActivo: {
    backgroundColor: COLORS.fondo,
    borderWidth: 1,
    borderColor: COLORS.rojo,
    borderRadius: 20,
    paddingVertical: 6,
  },

  tabText: {
    fontSize: 13,
    color: COLORS.negro,
  },

  tabTextActivo: {
    color: COLORS.rojo,
    fontWeight: "700",
  },
});
