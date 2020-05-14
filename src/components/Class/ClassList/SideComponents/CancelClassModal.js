import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import Close from '../../../../../assets/images/svg/close.svg'
import MainButton from '../../../global/MainButton'
import LoadingModal from '../../../global/LoadingModal'
import { cancelClassReservation } from '../../../../utils/ClassUtils'
const CancelClassModal = ({ id, close, refresh }) => {
    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const onSubmit = async () => {
        setLoading(true);
        const r = await cancelClassReservation(id, feedbackMessage);
        if (r) {
            refresh();
            console.log('canceled')
        }
        else {
            console.log('failed')
        }
        setLoading(false)
        close();

    }
    return (
        <Modal style={{ margin: 5 }} isVisible={true} animationIn="fadeIn" animationInTiming={1000}>
            <LoadingModal modalVisible={loading}></LoadingModal>
            <View style={styles.container}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => { close() }}>

                        <Close height={styles.svg.height} width={styles.svg.width} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Are you sure you want to cancel?</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="Tell us the reason if it is related to us"
                        multiline
                        style={styles.textInput}
                        value={feedbackMessage}
                        onChangeText={(t) => { setFeedbackMessage(t) }}
                    />
                </View>
                <View style={styles.buttonContainer}>

                    <MainButton
                        firstGradient="#1D55C5"
                        secondGradient="#E93354"
                        onPress={() => onSubmit()}
                    >
                        Cancel
                    </MainButton>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 0.4 * Dimensions.get('window').height,
        resizeMode: 'contain',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center'
    },
    closeContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: '8%',
        paddingVertical: '3%',
    },
    svg: {
        width: 15,
        height: 15,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: '5%'
    },
    text: {
        fontFamily: "Montserrat_Bold",
        fontSize: 16
    },
    textInputContainer: {

        width: '55%',
        marginBottom: '5%',
        height: '35%'
    },
    textInput: {
        borderRadius: 12,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 10,
        fontFamily: "Montserrat_SemiBold",
        fontSize: 12,
        borderColor: '#707070'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default CancelClassModal;