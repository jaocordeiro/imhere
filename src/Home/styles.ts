import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 8,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#2d2c33",
    borderRadius: 10,
    color: "#fff",
    padding: 8,
    fontSize: 16,
    marginRight: 12
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: "#31cf67",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  },
  listEmptyText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14
  }
});