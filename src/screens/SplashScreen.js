import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LoadingModal from "../components/global/LoadingModal";
import background from "../../assets/images/background.jpg";
import { validateToken } from "../utils/ValidateToken";


export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  const TokenValidation = async () => {
    try {
      const validToken = await validateToken();
      if (validToken == false) navigation.navigate("AuthentcationNav");
      else navigation.navigate("ApplicationNav");
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    TokenValidation();
  }, []);
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
