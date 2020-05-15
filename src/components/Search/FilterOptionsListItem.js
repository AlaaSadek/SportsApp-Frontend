import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Check from '../../../assets/images/svg/Check'
const FilterOptionsList = ({ filterName, item, toggleItemState }) => {
    const handlePress = () => {
        toggleItemState(filterName, item);
    }
    return <TouchableOpacity onPress={handlePress}>

        <View style={styles.container}>
            <View style={styles.checkBoxContainer}>
                {item.state ? <Check height={styles.svg.height} width={styles.svg.width} /> : null}
            </View>
            <Text style={styles.itemName}>{item.name}</Text>

        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    checkBoxContainer: {
        width: 15,
        height: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 3,
        shadowColor: "rgba(31, 84, 195, 0.16)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4.19,
        elevation: 4,
        alignContent: 'center',
        justifyContent: 'center'
    },
    itemName: {
        fontSize: 18 * (Math.min((Dimensions.get('window').height / 800.0), (Dimensions.get('window').width / 375.0))),
        fontFamily: 'Montserrat_SemiBold',
        textAlignVertical: 'center',
        marginLeft: 10
    },

    svg: {
        width: 14,
        height: 10
    },

});
export default FilterOptionsList;