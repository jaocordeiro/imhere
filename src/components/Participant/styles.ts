import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    marginLeft: 8
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: "#e23c44",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  }
});