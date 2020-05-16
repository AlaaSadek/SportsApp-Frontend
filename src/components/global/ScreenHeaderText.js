import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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
    container: {
        width: '100%',
        // height:'12%' , 
        // marginTop:'15%'
        marginTop:'3.5%'
    },
    text: {
        color: '#494EAD',
        fontSize: 35 * (Math.min((Dimensions.get('window').height / 800.0), (Dimensions.get('window').width / 375.0))),
        fontFamily: "Montserrat_Bold",
    },
});

export default ScreenHeaderText;
