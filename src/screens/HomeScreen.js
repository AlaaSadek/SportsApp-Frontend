import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import MainButton from "../components/global/MainButton";
import background from "../../assets/images/background.jpg";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.BackgroundStyle}>
      <View style={styles.txtContainer}>
        <Text style={styles.welcomeTXT}>Welcome</Text>
        <Text style={styles.appTXT}>to Meet Up</Text>

        <Text style={styles.description1TXT}>
          The best way to meet people and find new
        </Text>
        <Text style={styles.description2TXT}>activities. Let’s get started!</Text>
      </View>

      <MainButton
        firstGradient="#1755D0"
        secondGradient="#B36FD6"
        style={styles.registerBTN}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        REGISTER
      </MainButton>

      <MainButton
        firstGradient="#B36FD6"
        secondGradient="#1755D0"
        style={styles.loginBTN}
        onPress={() => navigation.navigate("SignInScreen")}
      >
        LOGIN
      </MainButton>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  BackgroundStyle: {
    flex: 1,
    resizeMode: "stretch",
    height: "100%",
    backgroundColor: "#241332",
  },
  registerBTN: {
    marginBottom: "3%",
  },
  loginBTN: {
    marginBottom: "8%",
  },

  txtContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  welcomeTXT: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Montserrat_Bold",
    marginBottom: "2%",
    marginTop: "12%",
  },

  appTXT: {
    color: "#FFFFFF",
    fontSize: 32,
    marginBottom: "6%",
    fontFamily: "Montserrat_Bold",
    marginTop: "-2%",
  },
 
  description1TXT: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Montserrat_Medium",
    marginTop: "3%",
    marginBottom: "1%",
  },
  description2TXT: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Montserrat_Medium",
    marginTop: "1%",
  },
});

export default HomeScreen;
