import React, { useState} from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LoadingModal from "../components/global/LoadingModal";
import background from "../../assets/images/background.jpg";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => { //the 3 secs are to recognize loading until backend is done
    navigation.navigate("AuthentcationNav");
  }, 3000);
  return (
    <ImageBackground source={background} style={styles.Background}>
      <LoadingModal modalVisible={loading} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  Background: {
    flex: 1,
    resizeMode: "stretch",
    height: "100%",
    backgroundColor: "#2A1C5A",
  },
});
