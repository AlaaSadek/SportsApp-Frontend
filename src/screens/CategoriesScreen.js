import React from "react";
import { Text, View,StyleSheet,Dimensions } from "react-native";
import CategoriesList from '../components/CheckList/CategoriesList';
import ScreenHeaderText from '../components/global/ScreenHeaderText';
import MainButton from '../components/global/MainButton';
import {ClassLevels,ClassTypes,AllBranches} from '../services/getCategoriesLists';

const {height}=Dimensions.get('window')
const CategoriesScreen = ({ navigation }) => {
  
  const [allClasses,getAllClassTypes]=ClassTypes()
  const [allLevel,getAllClassLevels]=ClassLevels()
  const [getAllBranches,allBranches]=AllBranches()

  return (
    <View style={styles.mainContainer}>
     
      <View style={styles.headerText}>
    <ScreenHeaderText headerText={'Categories'}/>
    </View>
     <CategoriesList
       Title={'Classes'}
       list={allClasses}
       style={{height:height<600?'17%':height>770?'25%':'20%'}}
     />
      <CategoriesList
       Title={'Level'}
       list={allLevel}
       style={{height:height<600?'12%':'15%'}}
     />
      <CategoriesList
       Title={'Places'}
       list={allBranches}
       style={{height:height<600?'12%':'12%'}}
     />
    <MainButton
            firstGradient="#1D55C5"
            secondGradient="#E93354" style={styles.loginBTN}
            onPress={() => onSubmit()}
            style={{marginTop:'4%'}}
          >
            Find Results 
    </MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
    mainContainer:{
        display:'flex',
        flex:1,
        //marginTop:'20%',
        backgroundColor:'#FFFFFF'
    },
    headerText:{
      marginLeft:'7%'
    }

})
export default CategoriesScreen;
