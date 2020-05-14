import React,{useState,useEffect} from "react";
import { Text, View,StyleSheet } from "react-native";
import ScreenHeaderText from '../components/global/ScreenHeaderText'
import SearchBar from '../components/Search/SearchBar';
import DefaultClassList from '../components/Class/ClassList/DefaultClassList'
// import {ClassTypes} from '../services/getCategoriesLists';
// import {useResult} from '../services/search';
// import CategoriesList from '../components/CheckList/CategoriesList';
import BackendAxios from '../services/backendAxios'

const SearchScreen = ({ navigation }) => {

  const [allClasses, setClasses] = useState([])
  const Search = async (term) => {
    await BackendAxios.get(`Class/AllClassesByName/${term}`)
      .then(response => {
         console.log(response)  
         setClasses(response.data.payload); })
  }
  
  useEffect(
    () => {
      Search('Yoga').then((result) => {
        setClasses(result);
      })
    }, []
  )
  
  const [term,setTerm]=useState('')
  console.log(term)
 
    return (
      <View style={styles.mainContainer}>
         <SearchBar 
          term={term} 
          onTermChange={newTerm=>setTerm(newTerm)}
          // onTermSubmit={()=>console.log(submitted)}
          onTermSubmit={(term)=>Search(term)}
         />
         <ScreenHeaderText headerText={'Results'}/>
       <Text>{term}</Text>
      <View style={{ flex: 1 }}>
        <DefaultClassList  displayDetails={false} classes={allClasses} header="" />
      </View>
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
