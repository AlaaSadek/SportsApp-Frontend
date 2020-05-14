import React,{useState,useEffect} from "react";
import { Text, View,StyleSheet } from "react-native";
import ScreenHeaderText from '../components/global/ScreenHeaderText'
import SearchBar from '../components/Search/SearchBar';
import DefaultClassList from '../components/Class/ClassList/DefaultClassList'
import {ClassTypes} from '../services/getCategoriesLists';
import {useResult} from '../services/search';
import CategoriesList from '../components/Checkbox/CategoriesList';

const SearchScreen = ({ navigation }) => {

  
  const [term,setTerm]=useState('')
  const [allClasses,getAllClassTypes]=ClassTypes()
  const [getResult,results]=useResult()

  const FindIdbyName=(name)=>
  {
    for (const item of allClasses) {
      if (item.name === name) {
        return item._id;
      }
      else return null
    }
  }

  const Search=()=>{

    let res=FindIdbyName(term)
    console.log(res)
    // setId(res)
    getResult(res)
    console.log(results)
    
   
 }

    
    
    return (
      <View style={styles.mainContainer}>
         <SearchBar 
          term={term} 
          onTermChange={newTerm=>setTerm(newTerm)}
          // onTermSubmit={()=>console.log(submitted)}
          onTermSubmit={()=>Search()}
         />
         <ScreenHeaderText headerText={'Results'}/>
       <Text>{term}</Text>
       <Text>{results}</Text>
       <DefaultClassList classes={results} header="Popular Classes" />
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
export default SearchScreen;
