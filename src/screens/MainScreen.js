import React from "react";
import { Text, View } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";
import HomeHeaderNavigation from '../components/global/HomeHeaderNavigation';
import Header from '../components/global/Header';
const MainScreen = ({ navigation }) => {
  return (
    <View>
      <HomeHeaderNavigation></HomeHeaderNavigation>
      <Header></Header>
      <Text style={{marginTop:'5%'}}>Main Screen</Text>

      <MainButton
        onPress={() => {
          clearToken();
          navigation.navigate("SplashScreen");
        }}
      >
        LogOut
      </MainButton>
    </View>
  );
};

export default MainScreen;
