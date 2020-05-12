import React from "react";
import { Text, View } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Main Screen</Text>

      <MainButton
        onPress={() => {
          clearToken();
          navigation.navigate("SplashScreen");
        }}
      >
        LogOut
      </MainButton>

      <MainButton
        onPress={() => {
          console.log('hena');
          navigation.navigate("AboutUs");
        }}
      >
        AboutUs
      </MainButton>
    </View>
  );
};

export default MainScreen;
