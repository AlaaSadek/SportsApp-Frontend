import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";

import HeaderButton from '../components/global/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const testscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={{ marginTop: '5%' }}>Main Screen</Text>

            <MainButton
                onPress={() => {
                    clearToken();
                    navigation.navigate("TestScreen2");
                }}
            >
                TestScreen
      </MainButton>
        </View>
    );
};


testscreen.navigationOptions = (props) => {
    return {

        title: '',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item style={styles.backIcon} title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <TouchableOpacity style={{ flexDirection: 'row-reverse', color: '#020202' }} >
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="menu" iconName='search' onPress={() => { }} />
                    </HeaderButtons>
                    <Text style={styles.searchText}>Search</Text>
                </TouchableOpacity>)
        },
        headerStyle: {
            shadowColor: 'transparent',
        },
      
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    searchText: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 15,
        color: '#020202',
        marginTop: 5,
        letterSpacing: 2

    },
    backIcon: {
        marginLeft: 18,
        marginTop: 10,
        color: '#020202'
    }

});
export default testscreen;
