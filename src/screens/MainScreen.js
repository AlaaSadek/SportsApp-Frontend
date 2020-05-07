import React from "react";
import { Text, View,StyleSheet,TouchableOpacity } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";

const MainScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
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
          navigation.navigate("AnnouncementDetail");
        }}
      >
        Announcement Detail
      </MainButton>
  
</View>

  );
};
const styles = StyleSheet.create({
    
})

export default MainScreen;
