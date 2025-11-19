import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", // color base de fons suau
  },

  /* ─── HEADER SUPERIOR ─────────────────────────── */
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#CBD5E1", // mateix color que caixa central
    width: "95%",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 20,
  },

  redButton: {
    backgroundColor: "#B3261E",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  botonMarca: {
    backgroundColor: "transparent",
    justifyContent: "center",
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
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },

  tabButton: {
    alignItems: "center",
  },

  tabText: {
    fontSize: 12,
    color: "#000",
    marginTop: 2,
  },
});
