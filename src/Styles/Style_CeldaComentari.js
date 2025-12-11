import { StyleSheet } from "react-native";

export default StyleSheet.create({
  celda: {
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },

  filaSuperior: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  autor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#B3261E",
  },

  hora: {
    fontSize: 12,
    color: "#6B7280",
  },

  comentari: {
    marginTop: 6,
    fontSize: 14,
    color: "#000",
  },
});
