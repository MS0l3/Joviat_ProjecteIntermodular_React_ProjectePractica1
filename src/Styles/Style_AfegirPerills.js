import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7f7",
  },
  mainBox: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    padding: 10,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  imageButton: {
    backgroundColor: "#B3261E",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  imageButtonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
  },
  imageScroll: {
    flex: 1,
  },
  previewImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 6,
  },
  label: {
    color: "#000",
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 3,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  dropdownText: {
    color: "#555",
  },
  triangleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 6,
  },
  textInput: {
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlignVertical: "top",
  },
  mapPlaceholder: {
    backgroundColor: "#d9d9d9",
    height: 140,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  mapText: {
    color: "#555",
    fontSize: 15,
  },
  addButton: {
    backgroundColor: "#B3261E",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
