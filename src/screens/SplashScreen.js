import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LoadingModal from "../components/global/LoadingModal";
import background from "../../assets/images/background.jpg";
//import { validateToken } from "../utils/ValidateToken";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  //Waiting for validate token end point

  // const TokenValidation = async () => {
  //   try {
  //     const validToken = await validateToken();
  //     if (validToken == false) navigation.navigate("AuthentcationNav");
  //     else {
  //       navigation.navigate("ApplicationNav");
  //     }
  //   } catch (error) {
  //     return err;
  //   }
  // };
  // useEffect(() => {
  //   TokenValidation();
  // }, []);
  setTimeout(() => {
    //the 3 secs are to recognize loading until backend is done
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
