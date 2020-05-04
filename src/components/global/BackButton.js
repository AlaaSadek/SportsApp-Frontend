import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";



const BackButton = (navigation) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { }} >
                <MaterialIcons name='arrow-back' size={27} color='black' />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: '5%',
    }
})
export default BackButton;