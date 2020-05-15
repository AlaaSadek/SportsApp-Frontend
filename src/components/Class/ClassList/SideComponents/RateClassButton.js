import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import RateClassModal from './RateClassModal';

const CancelClassButton = ({ classItem, refresh }) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    if (classItem.isRated)
        return null
    return (

        <View style={styles.container}>
            {
                modalVisibility ? <RateClassModal refresh={refresh} id={classItem._id} close={() => setModalVisibility(false)} /> : null
            }
            <TouchableOpacity onPress={() => {
                setModalVisibility(true);
            }}>

                <Text style={styles.text}>Rate</Text>
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
        textAlign: 'center',
        fontSize: 16
    }
});

export default CancelClassButton;