import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const SearchInput = ({ searchValue, setSearchValue,onSearch }) => {

    return <View style={styles.container}>
        <TextInput
            style={styles.textInput}
            placeholder="Search"
            value={searchValue}
            onChangeText={(t) => { setSearchValue(t) }}
        />
        <TouchableOpacity onPress={onSearch}>

            <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
    container: {
        width: '100%',

        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textInput: {
        flex: 1,
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 15,
        color: 'rgba(2, 2, 2, 0.63)'
    }
});

export default SearchInput;