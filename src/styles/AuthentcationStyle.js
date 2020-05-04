import { StyleSheet, Dimensions } from 'react-native';

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
    shadowColor: 'rgba(31, 84, 195, 0.149)',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowRadius: 15.19,
    elevation: 23,
    marginBottom: Dimensions.get('window').height > 850 ? '12%' : Dimensions.get("window").height < 660 ? '3%':  '4%',
    marginTop:Dimensions.get("window").height > 740 ?'8%' :'6%'
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: "white",
  },
  logo: {
    resizeMode: 'center',
    width: Dimensions.get("window").height > 600 ? 300 : 200,
 // height: Dimensions.get("window").height > 740 ? 215 : Dimensions.get("window").height < 660 ? 95 : 140,
    height: Dimensions.get("window").height > 800 ? 165 :Dimensions.get("window").height > 740? 120: Dimensions.get("window").height < 660 ? 70 : 100,
  
  },
  signInUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '63%',
    alignSelf: 'center',
    marginBottom: '2%'
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
    alignSelf: 'center',
  },
  facebookIcon: {
    color: '#2754C0',
    fontSize: 24,
    alignSelf: 'center',
  },
  twitterIcon: {
    color: '#7E458F',
    fontSize: 24,
    alignSelf: 'center',
  },
  envelopIcon: {
    color: '#D33760',
    fontSize: 26,
    alignSelf: 'center',
  },
  eyeIcon: {
    color: "#CCCCCC",
    fontSize: 24
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
    marginTop: Dimensions.get("window").height > 740 ? '10%' :Dimensions.get('window').height < 560? '6.5%': Dimensions.get("window").height < 570 ?'7%':Dimensions.get("window").height < 600 ?  '8.5%' : '10%', 
    marginLeft: "75%",
  },
  
 
  
})

