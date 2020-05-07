import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";



const BackButton = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { props.backButtonPress()}} >
                <MaterialIcons name='arrow-back' size={27} color='black' />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: '5%',
    }
})
export default BackButton;