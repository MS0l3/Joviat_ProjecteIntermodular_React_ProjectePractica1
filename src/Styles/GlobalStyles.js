// ============================================================================
// ✅ ARCHIVO DE ESTILOS GLOBAL — TODA LA UI AQUÍ
// ============================================================================

import { StyleSheet } from "react-native";

// ============================================================================
// 🎨 PALETA DE COLORES — CAMBIA AQUÍ Y CAMBIA TODA LA APP
// ============================================================================
const COLORS = {
  fondo: "#F6EDED",
  blanco: "#FFFFFF",
  texto: "#000000",
  acento: "orange",
  peligro: "#E41B17",
  grisSuave: "#D9D9D9",
  grisOscuro: "#707070",
  rojoUI: "#B80000",
};

// ============================================================================
// 📏 MEDIDAS / SPACING / SIZES
// ============================================================================
const SIZES = {
  border: 10,
  padding: 12,
  paddingSmall: 8,
  tabBtnHeight: 45,
  mapMiniHeight: 90,
  fontXS: 11,
  fontSmall: 13,
  fontMedium: 16,
  fontLarge: 20,
};

// ============================================================================
// 🔥 SOMBRAS UNIVERSALES
// ============================================================================
const SHADOW = {
  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 3,
};

// ============================================================================
// 🧱 ESTILOS PRINCIPALES
// ============================================================================
export const STYLES = StyleSheet.create({

  // 📌 CONTENEDOR PRINCIPAL
  pantalla: {
    flex: 1,
    backgroundColor: COLORS.fondo,
  },

  // ========================================================================
  // 🎛️ TOP BAR — BOTÓN Ajustes/Volver + Marca + Usuario
  // ========================================================================
  topBarWrapper: {
    width: "100%",
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // 🔙 Botón Rojo (Volver / Ajustes según variable)
  topBtn: {
    backgroundColor: COLORS.rojoUI,
    padding: 10,
    borderRadius: SIZES.border,
    ...SHADOW,
  },

  topBtnIcon: {
    fontSize: 22,
    color: COLORS.blanco,
  },

  // 🏷️ Zona palabras de marca (Botón invisible)
  brandTouchArea: {
    padding: 10,
    borderRadius: SIZES.border,
  },

  brandText: {
    fontWeight: "900",
    fontSize: SIZES.fontLarge,
  },

  // 👤 Botón usuario
  userBtn: {
    backgroundColor: COLORS.grisSuave,
    padding: 10,
    borderRadius: SIZES.border,
    ...SHADOW,
  },

  userIcon: {
    fontSize: 22,
    color: COLORS.texto,
  },

  // ========================================================================
  // 📍 SWITCH "MAPA / LISTA"
  // ========================================================================
  switchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.grisSuave,
    margin: 12,
    borderRadius: SIZES.border,
  },

  switchBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: SIZES.border,
    alignItems: "center",
    justifyContent: "center",
  },

  switchBtnActive: {
    backgroundColor: COLORS.blanco,
    borderWidth: 2,
    borderColor: COLORS.rojoUI,
  },

  switchText: {
    fontSize: SIZES.fontSmall,
    fontWeight: "600",
  },

  // ========================================================================
  // 🗂️ GRID DE UBICACIONES (3 columnas)
  // ========================================================================
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },

  celda: {
    width: "31%",
    marginVertical: 6,
    borderRadius: SIZES.border,
    backgroundColor: COLORS.blanco,
    overflow: "hidden",
    ...SHADOW,
  },

  // ========================================================================
  // 🗺️ MAPAS
  // ========================================================================
  mapaMini: {
    width: "100%",
    height: SIZES.mapMiniHeight,
  },

  mapaGrande: {
    flex: 1,
  },

  // ========================================================================
  // ✏️ TEXTOS DENTRO DE CELDAS
  // ========================================================================
  textoNombre: {
    fontWeight: "700",
    fontSize: SIZES.fontSmall,
    textAlign: "center",
    paddingVertical: 3,
    color: COLORS.texto,
  },

  textoPeligro: {
    fontSize: SIZES.fontMedium,
    textAlign: "center",
    paddingBottom: 5,
    color: COLORS.acento,
  },

  titulo: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: SIZES.fontLarge,
    paddingBottom: 10,
  },

  // ========================================================================
  // ⬇️ TABBAR INFERIOR (3 botones)
  // ========================================================================
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.grisSuave,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
    ...SHADOW,
  },

  tabBtn: {
    flex: 1,
    height: SIZES.tabBtnHeight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.border,
    marginHorizontal: 5,
  },

  tabBtnActive: {
    backgroundColor: COLORS.blanco,
    borderWidth: 2,
    borderColor: COLORS.rojoUI,
  },

  tabBtnText: {
    fontSize: SIZES.fontSmall,
    fontWeight: "700",
  },
});
