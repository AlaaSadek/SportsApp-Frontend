import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ScreenHeaderText = ({ headerText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {headerText}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    text: {
        color:'#494EAD',
        fontSize: 35,
        fontFamily: "Montserrat_Bold",
    },
});

export default ScreenHeaderText;
