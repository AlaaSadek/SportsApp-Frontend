import React from "react";
import { Text, View } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";

const MainScreen = ({ navigation }) => {
  // console.log(navigation.state.params.itemID);
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
          navigation.navigate("AllAnnouncements");
        }}
      >
        Announcement Cards
      </MainButton>
    </View>
  );
};

export default MainScreen;
