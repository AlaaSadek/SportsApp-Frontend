import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

    whiteBackground:
    {
        backgroundColor: '#FFFFFF',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        shadowOpacity: 0.27,
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
      height:Dimensions.get('window').height>800?Dimensions.get('window').height*0.25:'20%',
      width: Dimensions.get('window').width,
      marginBottom:Dimensions.get('window').height>800?'12%':'7%',
    },
    logo:{
        height:93,
        width:175,
        alignSelf: 'center',
        marginTop:Dimensions.get('window').height>800?'20%':'3%',
        marginBottom:'1%'
    },
    signInUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        alignSelf: 'center',
       // marginTop:'50%',
       height:'30%',
      
    },
    activeButton:{
        borderBottomColor:'#1F54C3',
        borderBottomWidth:4,
        height:'100%',
        //width:'50%',
        alignSelf:'center'
       
    },
    activeText: {
        color: '#1D2226',
        fontSize: 16,
        fontFamily: 'Montserrat_Bold',
       // borderWidth:1,
        //height:'100%',
        marginLeft:'50%',
       marginRight:'10%'
    },
    activeTextLine:{
        // //marginLeft:'50%',
        // width:'50%',
        // borderWidth:2,
        // marginTop:'3%',
        // borderColor:'#1F54C3'
    },
    inActiveText: {
        color: '#1D2226',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium'
    },

    input:{
        width:'75%',
        //height:Dimensions.get('window').height>800?'6%':'7%',
        marginBottom:'0%',
        alignSelf:'center',
        borderRadius:5,
        backgroundColor:'#FFFFFF',
        fontSize:14,
        fontFamily: 'Montserrat_Medium',
        padding:'4%',
        borderWidth:1,
        borderColor:'#FFFFFF',
        shadowOpacity: 0.3,
        shadowColor:'#1F54C3',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 3,
        marginLeft:'10%'
    },
    signUpButton:{
        width:'77%',
       // height:100,
        height:50,
        marginBottom:'4%',
        borderRadius:10,
        backgroundColor:'#1D55C5',
        marginLeft:'10%',
        justifyContent:'center' ,
        marginTop:'4%'
    },
    signUpText:{
        fontSize:16,
        fontFamily: 'Montserrat_Medium',
        color:'#FFFFFF',
        marginTop:'3%',
        marginBottom:'10%',
        alignSelf: 'center', 
    },
    termsconditionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
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
        borderTopWidth:1,
        height:'2%',
        width:'80%',
        alignSelf: 'center',
        borderColor:'#D1D1D1',
        marginBottom:'0%'
    },
    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%',
        alignSelf: 'center',
        marginTop:'0%',
       height:'20%'
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
        //alignSelf: 'center',
    },
    errorText:{
        color: '#b30000',
        fontSize: 12,
        marginRight:'11%',
        marginLeft: '11%',
        marginTop: '4%',
        marginBottom:'0%',
        height:'2%',
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
        marginTop:'1%'
    }
    
})

