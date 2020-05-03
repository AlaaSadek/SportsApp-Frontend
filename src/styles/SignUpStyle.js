import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    activeTextLine: {
        marginLeft: '50%',
        width: '50%',
        borderWidth: 2,
        borderColor: '#1F54C3',
    },
    termsconditionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    youaggreedText: {
        fontSize: 10,
        fontFamily: 'Montserrat',
        color: '#1A1A1A',
    },
    termsconditionText: {
        color: '#0052FF',
        fontSize: 10,
        fontFamily: 'Montserrat',
        textDecorationLine: 'underline',
    },
    line: {
        marginTop: '2%',
        marginBottom: '2%',
        borderWidth: 0.5,
        width: '75%',
        alignSelf: 'center',
        borderColor: '#D1D1D1',
    },
    signUpButton: {
        marginBottom: '2%',
        marginTop: '5%'
    },
    container: {
        flexDirection: 'row',

    },
    input: {
        marginBottom:'1.5%'
        //height: Dimensions.get('window').height > 800 ? 50 : Dimensions.get('window').height < 660 ? 33 : 45,
    }
})



