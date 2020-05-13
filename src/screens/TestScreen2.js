import React from "react";
import { Text, View, StyleSheet } from "react-native";

import HeaderButton from '../components/global/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const testscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={{ marginTop: '5%' }}>Test Screen </Text>


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

    backIcon: {
        marginLeft: 18,
        marginTop: 10,
        color: '#020202'
    }

});
export default testscreen;
