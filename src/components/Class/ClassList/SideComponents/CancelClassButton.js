import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CancelClassModal from './CancelClassModal';

const CancelClassButton = ({ classItem, refresh }) => {
    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <View style={styles.container}>
            {
                modalVisibility ? <CancelClassModal refresh={refresh} id={classItem._id} close={() => setModalVisibility(false)} /> : null
            }
            <TouchableOpacity onPress={() => {
                setModalVisibility(true);
            }}>

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
        fontSize: 16
    }
});

export default CancelClassButton;