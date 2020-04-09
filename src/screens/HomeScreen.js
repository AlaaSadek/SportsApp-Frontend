import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MainButton from "../components/global/MainButton"
import background from "../../assets/images/background.jpg";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.BackgroundStyle}>
      <View style={styles.main}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text}>to Meet Up</Text>

        <Text style={styles.text2}>
          The best way to meet people and find new
        </Text>
        <Text style={styles.text3}>activities. Let’s get started!</Text>
      </View> 

      <MainButton firstGradient='#1755D0' secondGradient='#B36FD6' style={styles.btn1} onPress={()=>navigation.navigate('SignUpScreen')}>
        REGISTER
      </MainButton>
    
      <MainButton firstGradient='#B36FD6' secondGradient='#1755D0' style={styles.btn2} onPress={()=>navigation.navigate('SignInScreen')}>
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
  btn1:{
    marginBottom: "3%",
  },
  btn2:{
    marginBottom: "8%",
  },

  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 32,
    marginBottom: "6%",
    fontFamily: "Montserrat_Bold",
    marginTop:"-2%",
  },
  text1: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Montserrat_Bold",
    marginBottom: "2%",
    marginTop:"12%",


  },
  text2: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Montserrat_Medium",
    marginTop:"3%",
    marginBottom:"1%"
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Montserrat_Medium",
    marginTop:"1%",
    },
 
});

export default HomeScreen;
