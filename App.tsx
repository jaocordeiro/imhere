import { StatusBar } from "react-native";
import { Home } from "./src/Home";


export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Home />
    </>
  );
}