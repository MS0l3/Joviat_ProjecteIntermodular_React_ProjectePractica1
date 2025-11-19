import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF7FF", // Fondo general
    alignItems: "center",
  },

  // 🟥 CABECERA
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#CBD5E1",
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

  botonUsuario: {
    backgroundColor: "transparent",
    padding: 8,
  },

  // ⚙️ SWITCH MAPA / LLISTA
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
    backgroundColor: "#B3261E",
    borderRadius: 20,
  
  },

  switchText: {
    color: "#000",
    fontWeight: "600",
  },

  switchTextActivo: {
    color: "#FFF",
  },

  // 📍 CONTENIDO
  mainContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "top",
  },

  // 🔻 TABBAR
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
    backgroundColor: "#FFF8F7",
    borderWidth: 1,
    padding: 2,
    borderColor: "#B3261E",
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
