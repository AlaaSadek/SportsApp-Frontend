import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";
import Announcements from "../components/Announcements/Announcements";
import ScreenHeaderText from '../components/global/ScreenHeaderText'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';


const FavoriteScreen = ({ navigation }) => {

  return (
    
     <View style={{margin:70}}>
         <Text>favorite Screen</Text>
     </View>
  );
};
FavoriteScreen.navigationOptions=(props)=>{
    return {
        title: '',
        headerTransparent: true,
        headerLeft: () => {
          return (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item style={styles.backIcon} title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
        </HeaderButtons>
          )
        },
       
        headertransparent:true,
      
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default FavoriteScreen;
