import React from "react";
import { Text, View,StyleSheet,TouchableOpacity } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";
import Announcements from "../components/global/Announcements";

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
  
    <View >
    <Text style={styles.homeText}>Home</Text>
    <View style={styles.announcement_viewallcontainer}>
        <Text style={styles.announcementText}>Announcements</Text>
        <TouchableOpacity><Text style={styles.viewallTest}>View All</Text></TouchableOpacity>
        
    </View>
     {/* <Announcements data={announcementData}/> */}
     <Announcements />
</View>
</View>

  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
  homeText:
  {
      fontSize:35,
      fontFamily:'Montserrat_Bold',
      color:'#494EAD',
      marginLeft:'5%',
      marginBottom:'5%'
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
