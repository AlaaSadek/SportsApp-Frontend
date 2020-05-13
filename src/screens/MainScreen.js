import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";

import HeaderButton from '../components/global/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const MainScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>

      <Text style={{}}>Main Screen</Text>

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
          clearToken();
          navigation.navigate("testscreen");
        }}
      >
        testscreen
      </MainButton>
    </View>
  );
};
 
 
MainScreen.navigationOptions = (props) => {
  return {

    title: "",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
          <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
        </HeaderButtons>
      )
    },
    headerRight: () => {
      return (<View style={{ flexDirection: 'row-reverse' }}>
        <HeaderButtons HeaderButtonComponent={HeaderButton} style={{  }}>
          <Item title="menu" iconName='search' onPress={() => { }} />
        </HeaderButtons>
        <TouchableOpacity style={styles.chooseClassButton} onPress={() => { props.navigation.navigate('testscreen') }} >
          <Text style={styles.chooseClassText}>Choose your class</Text>
        </TouchableOpacity>
      </View>
      )
    },

    headerTitleStyle: {
      letterSpacing: 3,
      fontFamily: "Montserrat_SemiBold",
      fontSize: 15,
    },
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'transparent',
    },
    headerTintColor: '#020202',

  }}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  chooseClassButton: {
    marginRight: 40

  },
  chooseClassText: {
    fontFamily: "Montserrat_SemiBold",
    fontSize: 15,
    letterSpacing: 3
  }
});
export default MainScreen;
