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
      <MainButton
        onPress={() => {
          navigation.navigate("AllAnnouncements");
        }}
      >
        Announcement Cards

      </MainButton>
      <MainButton
        onPress={() => {
          console.log('hena');
          navigation.navigate("AboutUs");
        }}
      >
        AboutUs

      </MainButton>
      <MainButton
        onPress={() => {
          navigation.navigate("BranchesScreen");
        }}
      >
        Branches
      </MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
    
})

export default MainScreen;
