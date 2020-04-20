import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SuccessModal = ({ modalVisible, closeModal, message }) => {
    if(!modalVisible)
    return null;
    return (
        <Modal isVisible={modalVisible} >
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Ionicons
                        size={20}
                        name="check-circle"
                        color='#92FF51'
                    />
                </View>
                <View style={styles.Body}>
                    <Text style={styles.errorText}>Success</Text>
                    <Text style={styles.messageText}>{message ? message.replace(/, /g, '\n') : 'There is some error'}</Text>
                </View>

                <View style={styles.Footer}>
                    <TouchableOpacity style={styles.button} onPress={() => { closeModal() }}>
                        <View >
                            <Text style={styles.buttonText}>OK</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        minHeight: '30%',
        maxHeight: '50%',
        overflow: 'hidden'
    },
    Header: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(60, 200, 30, 0.70)',

    },
    Footer: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Body: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    button: {
        height: '70%',
        width: '40%',
        borderRadius: 75,
        backgroundColor: 'rgba(60, 200, 30, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(0,255,0,0.3)'
    },
    buttonText: {
        fontSize: 25,
        color: 'white'
    },
    errorText: {
        fontSize: 25, marginBottom: 10
    },
    messageText: {
        fontSize: 15,
    }
})
export default SuccessModal;
