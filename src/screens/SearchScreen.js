import React,{useState,useEffect} from "react";
import { Text, View,StyleSheet } from "react-native";
import ScreenHeaderText from '../components/global/ScreenHeaderText'
import SearchBar from '../components/Search/SearchBar';
import DefaultClassList from '../components/Class/ClassList/DefaultClassList'
import {getAllClassTypes} from '../services/getCategoriesLists';
import {Search} from '../services/search';

const SearchScreen = ({ navigation }) => {
  const [allClasses, setAllClasses] = useState([]);
  const [term,setTerm]=useState('')
  const [results,setResults]=useState([]);

  useEffect(() => {
    getAllClassTypes().then((result) => {
      // Object.entries(result);
      setAllClasses(result);
      //console.log(allClasses)
    });
  }, []);
    //console.log(findIDByName(term))
    function findIDByName(name) {
      for (const item of allClasses) {
        if (item.name === name) {
          return item._id;
        }
      }
    }
    let id=''
    if(findIDByName(term)!='undefined')
    {
      id=findIDByName(term)
      console.log(id)
      useEffect(() => {
        Search(id).then((result) => {
          // Object.entries(result);
          setResults(result);
          console.log(results)
        });
      }, []);
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
