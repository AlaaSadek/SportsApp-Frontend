import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CancelClassButton = ({ classItem }) => {

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('will rate ' + classItem._id)}>

                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%'
    },
    text: {
        color: '#E93354',
        fontFamily: "Montserrat_Bold",
    }
});

export default CancelClassButton;