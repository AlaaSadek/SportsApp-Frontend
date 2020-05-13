import React,{useState,useEffect} from "react";
import { Text, View,StyleSheet,Dimensions } from "react-native";
import CategoriesList from '../components/Checkbox/CategoriesList';
import ScreenHeaderText from '../components/global/ScreenHeaderText';
import MainButton from '../components/global/MainButton';
import {getAllClassTypes,getAllClassLevels,getAllBranches} from '../services/getCategoriesLists';
import resultsArray from '../components/Checkbox/CheckboxItem'
const {height}=Dimensions.get('window')
const CategoriesScreen = ({ navigation }) => {
  

  //getLists
  const [allClasses, setAllClasses] = useState([]);
  const [allLevel, setAllLevels] = useState([]);
  const [allBranches, setAllBranches] = useState([]);
 
  useEffect(() => {
    getAllClassTypes().then((result) => {
      // Object.entries(result);
      setAllClasses(result);
      console.log(allClasses)
    });
  }, []);
  
  useEffect(() => {
    getAllClassLevels().then((result) => {
      // Object.entries(result);
      setAllLevels(result);
      console.log(allLevel)
    });
  }, []);
  
  useEffect(() => {
    getAllBranches().then((result) => {
      // Object.entries(result);
      setAllBranches(result);
      console.log(allBranches)
    });
  }, []);

  const classestitlesList =
  [ 
    {title:'Yoga Classes',id: 0},
    {title:'Toning Classes',id: 1},
    {title:'Yoga',id: 2},
    {title:'Toning Classes',id: 3},
    {title:'Yoga',id: 4},
  ]
  const levelsList =
  [ 
    {title:'Beginners',id: 0, },
    {title:'Intermediated',id: 1},
    {title:'Advanced',id: 2},
  ]
  const placesList =
  [ 
    {name:'Fifth Settlement',_id: 0, },
    {name:'Heliopolis',_id: 1},
    {name:'Shourok',_id: 2},
    {name:'Nasr City',_id: 3},
  ]
  
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
       list={placesList}
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
