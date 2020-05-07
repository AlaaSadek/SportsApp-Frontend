import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import {  Right } from 'native-base';
import BackButton from './BackButton';



const Header = (props) => {

    return (

        <View style={styles.Container}>
           <BackButton></BackButton>
            <Right>
                <TouchableOpacity onPress={() => {props.searchButtonPress() }} >
                    <View style={styles.searchContainer}>
                        <Text style={styles.searchText}>Search</Text>
                        <Ionicons name='ios-search' size={27} color='black' />
                    </View>
                </TouchableOpacity>
            </Right>
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%'
    },

    searchContainer: {
       
        flexDirection: 'row',
    },
    searchText: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 15,
        color: '#020202',
        marginRight: '10%',
        marginTop: '5%',
        letterSpacing:2


    },

})
export default Header;