import React from "react";
import { Text, View,StyleSheet,TouchableOpacity } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";
import Announcements from "../components/Announcements/Announcements";
import ScreenHeaderText from '../components/global/ScreenHeaderText'


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

      <View style={{ width: '100%', margin: 4 }}></View>
      <MainButton
        onPress={() => {
          navigation.navigate("ClassListTestScreen");
        }}
      >
        Test Classes List
        </MainButton>

      <MainButton
        onPress={() => {
          navigation.navigate("ClassDescriptionScreen");
        }}
      >
        Class Description

      </MainButton>
  
    <View >
      
    <View style={styles.headerText}>
    <ScreenHeaderText headerText={'Home'}/>
    </View>
    <View style={styles.announcement_viewallcontainer}>
        <Text style={styles.announcementText}>Announcements</Text>
        <TouchableOpacity><Text style={styles.viewallTest}>View All</Text></TouchableOpacity>
        
    </View>
     {/* <Announcements data={announcementData}/> */}
     <Announcements />
</View>

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
      <MainButton
        onPress={() => {
          navigation.navigate("CategoriesFilterScreen");
        }}
      >
        Categories Filter
      </MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    headerText:
  {
      
      marginLeft:'5%',
     
  },
  card:{
      // justifyContent:'center',
      // alignItems:'center'
  },
  announcement_viewallcontainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      alignSelf: 'center', 
     
  },
  announcementText:{
      fontSize:15,
      fontFamily:'Montserrat_Bold',
      color:'#030303',
      marginBottom:'5%'
  },
  viewallTest:{
      fontSize:15,
      fontFamily:'Montserrat_SemiBold',
      color:'#D8365D',
      marginBottom:'5%' 
  },
  anouncemtScroll:{
      marginTop:'5%'
  }
})

export default MainScreen;
