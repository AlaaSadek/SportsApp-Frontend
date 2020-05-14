import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import Close from '../../../../../assets/images/svg/close.svg'
import MainButton from '../../../global/MainButton'
import LoadingModal from '../../../global/LoadingModal'
import RatingComponent from '../../../global/RatingComponent';
const RateClassModal = ({ id, close, refresh }) => {
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(3);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            close();
        }, 5000);
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
                    <Text style={styles.text}>Rate Your Class</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <RatingComponent maxRating={5} setValue={setRating} value={rating} />
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        value={feedbackMessage}
                        onChangeText={(t) => { setFeedbackMessage(t) }}
                        placeholder="Your feedback"
                        multiline
                        style={styles.textInput} />
                </View>
                <View style={styles.buttonContainer}>

                    <MainButton
                        firstGradient="#1D55C5"
                        secondGradient="#E93354"
                        onPress={() => onSubmit()}
                    >
                        Rate Class
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: '8%',
        paddingTop: '3%'
    },
    svg: {
        width: 15 * (Math.min((Dimensions.get('window').height / 800.0), (Dimensions.get('window').width / 375.0))),
        height: 15 * (Math.min((Dimensions.get('window').height / 800.0), (Dimensions.get('window').width / 375.0))),
    },
    ratingContainer: {
        width: '50%'
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: '3%'
    },
    text: {
        fontFamily: "Montserrat_Bold",
        fontSize: 25 * (Math.min((Dimensions.get('window').height / 800.0), (Dimensions.get('window').width / 375.0)))
    },
    textInputContainer: {
        width: '50%',
        marginVertical: '5%',
        height: '30%'
    },
    textInput: {
        borderRadius: 12,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 10,
        fontFamily: "Montserrat_SemiBold",
        fontSize: 13,
        borderColor: '#707070'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default RateClassModal;