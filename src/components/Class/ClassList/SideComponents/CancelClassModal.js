import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
// import Plus from '../../../../../assets/images/svg/classIcons/plus.svg'
import MainButton from '../../../global/MainButton'
const CancelClassModal = ({ id, close, }) => {

    return (
        <Modal style={{ margin: 5 }} isVisible={true} animationIn="fadeIn" animationInTiming={1000}>
            <View style={styles.container}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => { close() }}>

                        {/* <Plus height={styles.svg.height} width={styles.svg.width} /> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Are you sure you want to cancel?</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput placeholder="Tell us the reason if it is related to us" multiline style={styles.textInput} />
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
        height: '40%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: '9%',
        paddingVertical: '3%',
    },
    closeContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    svg: {
        width: 20,
        height: 20,
    },
    textContainer: {
        alignItems: 'center',
        marginVertical: '3%'
    },
    text: {
        fontFamily: "Montserrat_Bold",
        fontSize:15
    },
    textInputContainer: {

        marginVertical: '3%',
        marginHorizontal: '15%',
        height: '40%'
    },
    textInput: {
        borderRadius: 15,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 10,
        fontFamily: "Montserrat_SemiBold",
        borderColor: 'gray'
    },
    buttonContainer:{
        marginTop:'5%'
    }
})
export default CancelClassModal;