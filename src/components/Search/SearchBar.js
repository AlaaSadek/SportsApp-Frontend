import React from 'react';
import { View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";


const SearchBar = ({ term,onTermChange,onTermSubmit}) => {
    
    return (
        <View style={styles.searchContainer}>
             <TextInput 
           placeholder="Search"
           style={styles.searchText}
           value={term}
           onChangeText={newTerm=>onTermChange(newTerm)}
           onEndEditing={()=>onTermSubmit()}
           />
           <TouchableOpacity>
           <Icon name="search1" size={30}/>
           </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:10,
        height:50
    },
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginLeft:'20%',
       
        padding:10,
        textAlign:'left'
    },
    searchText:
    {
        fontSize:15,
        fontFamily: "Montserrat_SemiBold",
    }

});
export default SearchBar;