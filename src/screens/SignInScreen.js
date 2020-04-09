import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "./HomeScreen";
import MainButton from "../components/global/MainButton";

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      <MainButton
        firstGradient="#1D55C5"
        secondGradient="#E93354"
        style={styles.btn2}
      >
        LOGIN
      </MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
    btn2:{
        marginTop: "80%",
      },
});

export default SignInScreen;
