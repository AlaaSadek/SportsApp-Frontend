import React from 'react'
import { View, Text, FlatList,StyleSheet } from 'react-native'
import CheckboxItem from './CheckboxItem'

const List = ({Title,list,style}) => {
   
        return (
            
            <View >
                <Text style={styles.classesText}>{Title}</Text>
                <FlatList
                  style={style}
                  data={list}
                  keyExtractor={(item,index) => 'key'+index}
                  renderItem={({ item ,index}) => {
                    return (
                       <CheckboxItem 
                       title={item.name}
                       place={item.place}
                       id={item._id}
                       />
                    )
                }}
                />
            </View>
           
        )
    
    
}
const styles = StyleSheet.create({
    classesText:{
        color:'#D8365D',
        fontSize:25,
        fontFamily:'Montserrat_Bold',
        marginTop:'3%',
        marginBottom:'3%',
        marginLeft:'7%'
    }
});

export default List