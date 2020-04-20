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
      shadowOpacity: 0.2,
      shadowColor:'#5A6274',
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowRadius: 3,
      elevation: 12,
      marginBottom:Dimensions.get('window').height>850?'12%':'3%'
    },
    logoContainer:{
        alignItems:'center',
    },
    logo:{
         resizeMode:'center',
         //marginTop:Dimensions.get('window').height>850?'7%':'2%',
        width: Dimensions.get("window").height > 600 ? 300 : 200,
        height: Dimensions.get("window").height > 850 ? 215 : 110,
    },
    signInUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        alignSelf: 'center', 
        marginBottom:'2%'
    },
    activeText: {
        color: '#1D2226',
        fontSize: 16,
        fontFamily: 'Montserrat_Bold',
    },
    activeTextLine:{
        marginLeft:'50%',
        width:'50%',
        borderWidth:2,
        borderColor:'#1F54C3',
    },
    inActiveText: {
        color: '#1D2226',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium'
    },
    input:{
        width:'75%',
        height:'100%',
        //alignSelf:'center',
        borderRadius:5,
        backgroundColor:'#FFFFFF',
        fontSize:14,
        fontFamily: 'Montserrat_Medium',
        paddingHorizontal:'5%',
       // paddingVertical:'6%',
        borderWidth:1,
        borderColor:'#FFFFFF',
        shadowOpacity: 0.3,
        shadowColor:'#1F54C3',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 10,
        elevation: 12,
        marginLeft:'12%',
       
    },
    signUpButton:{
        width:'77%',
        height:50,
        marginBottom:'2%',
        borderRadius:5,
        backgroundColor:'#1D55C5',
        marginLeft:'11%',
        justifyContent:'center' ,
        alignItems: 'center', 
        marginTop:'6%'
    },
    signUpText:{
        fontSize:16,
        fontFamily: 'Montserrat_Medium',
        color:'#FFFFFF',
        marginTop:'3%',
        marginBottom:'10%',
    },
    termsconditionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    youaggreedText:{
        fontSize:10,
        fontFamily: 'Montserrat',
        color:'#1A1A1A',
    },
    termsconditionText:{
        color:'#0052FF',
        fontSize:10,
        fontFamily: 'Montserrat',
        textDecorationLine: 'underline',
    },
    line:{
        marginTop:'2%',
        marginBottom:'2%',
        borderTopWidth:1,
        width:'80%',
        alignSelf: 'center',
        borderColor:'#D1D1D1',
    },
    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25%',
        alignSelf: 'center',
    },
    facebookIcon:{
        color:'#2754C0',
        fontSize:25,
        alignSelf: 'center',
    },
    twitterIcon:{
        color:'#7E458F',
        fontSize:25,
        alignSelf: 'center',
    },
    envelopIcon:{
        color:'#D33760',
        fontSize:25,
        alignSelf: 'center',
    },
    errorContainer:{
        flexDirection: 'row',
        height:'7%'
    },
    errorText:{
        color: '#b30000',
        fontSize: 12,
        marginRight:'13%',
        marginLeft: '13%',
        marginTop: '4%',
        marginBottom:'0%',
        fontFamily: 'Montserrat_Medium',
    },
    error:{
        borderRadius:2,
        borderColor:'#b30000',
        alignSelf: 'center',
        borderRadius:5,
    },
    exclamationmartIcon:{
        color:'#b30000',
        fontSize:20,
        marginLeft:'2%',
        alignSelf:'center',
        
    }
    
})



