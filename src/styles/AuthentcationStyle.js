import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

    whiteBackground:
    {
        backgroundColor: '#FFFFFF',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    shadowBackground:
    {
      backgroundColor: '#FFFFFF',
      shadowOpacity: 0.57,
      shadowColor:'rgba(31, 84, 195, 0.149)',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowRadius: 15.19,
      elevation: 23,
      marginBottom:Dimensions.get('window').height>850?'6%':Dimensions.get("window").height < 540 ?'1%':'6%'
    },
    logoContainer:{
        alignItems:'center',
    },
    logo:{
         resizeMode:'center',
        // marginTop:Dimensions.get('window').height>850?'7%':'30%',
        width: Dimensions.get("window").height > 850 ? 300 : 200,
        height: Dimensions.get("window").height > 800 ? 200 :Dimensions.get("window").height < 540 ? 80:130, //130 instead of 150
    },
    signInUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '63%',
        alignSelf: 'center', 
        marginBottom:'2%'
    },
    activeText: {
        color: '#1D2226',
        fontSize: 16,
        fontFamily: 'Montserrat_Bold',
    },
    inActiveText: {
        color: '#1D2226',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium'
    },
    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25%',
        alignSelf: 'center',
    },
    facebookIcon:{
        color:'#2754C0',
        fontSize:24,
        alignSelf: 'center',
    },
    twitterIcon:{
        color:'#7E458F',
        fontSize:24,
        alignSelf: 'center',
    },
    envelopIcon:{
        color:'#D33760',
        fontSize:26,
        alignSelf: 'center',
    },
    passwordField: {
        flexDirection: "row",
      },
      passwordField: {
        flexDirection: "column",
      },
      passIcon: {
        zIndex: 1,
        position: "absolute",
        marginTop: Dimensions.get("window").height > 600 ? "9.6%" : "11.1%",
        marginLeft: "75%",
      },
      passwordLength: {
        width: "70%",
        marginTop:'2%',
        marginLeft: '11.5%'
      },
})

