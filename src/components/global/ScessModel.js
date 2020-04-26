import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/FontAwesome5";

const SuccessModal = ({ modalVisible, closeModal, message }) => {
    if(!modalVisible)
    return null;
    return (
        <Modal isVisible={modalVisible} >
            <View style={styles.container}>
                <View style={styles.Header}>
                  <View style={styles.iconcontainer}>
                    <Icon
                        size={24}
                        name="check"
                        color='#65C43B'
                    />
                    <Text style={styles.successText}>Success</Text>
                    </View>  
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
        margin:22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "rgba(0, 0, 0, 0.1)",
        minHeight: '20%',
        maxHeight: '25%',
        overflow: 'hidden'

    },
    iconcontainer:{
        flexDirection: "row",
        marginTop: "4%",
    },
    successText: {
        fontSize: 22,
        marginBottom: 18,
        fontFamily: "Montserrat_Medium",
        color: "#65C43B",
      },
    Header: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Footer: {
        height: '55%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Montserrat_Medium",
    },
    Body: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: '65%',
        width: '100%',
        backgroundColor: '#65C43B',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#65C43B",
        marginTop: "13%",
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontFamily: "Montserrat_SemiBold",
        marginBottom: "13%",
    },
    messageText: {
        marginTop:15,
        fontSize: 15,
        fontFamily: "Montserrat_Medium",
    }
})
export default SuccessModal;