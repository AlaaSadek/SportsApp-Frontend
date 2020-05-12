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

      <View style={{ width: '100%', margin: 4 }}></View>
      <MainButton
        onPress={() => {
          navigation.navigate("ClassListTestScreen");
        }}
      >
        Test Classes List
      </MainButton>
    </View>
  );
};

export default MainScreen;
