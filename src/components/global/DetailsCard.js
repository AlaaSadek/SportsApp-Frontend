
import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions ,ImageBackground} from "react-native";
import MainButton from "./MainButton";
const DetailsCard = (props) => {
    let containerStyle = styles.container
    if (props.description && props.description.length < 105)
    containerStyle=styles.containerSM;
   
    return (

        
            <View style={containerStyle}>
                <View style={styles.TextContainer}>
                    
                            <Text style={styles.Title}>{props.title}</Text>
                            <Text style={styles.Description} >{props.description}</Text>
                            {/* <Text style={styles.duedate}>{props.dueDate}</Text> */}
                            <Text style={styles.termsAndCondition}>{props.termsConditions}</Text>

                           
                        </View>
                        <MainButton
                                firstGradient="#1D55C5"
                                secondGradient="#E93354"
                                style={styles.chooseClassButton}
                                onPress={()=>{console.log('Choose class')}}
                                
                            >
                                Choose your class
                            </MainButton>
                    
            </View>
     


    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height:Dimensions.get('window').height>740? Dimensions.get('window').height*0.40:Dimensions.get('window').height*0.45,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: Dimensions.get('window').height>800?50:Dimensions.get('window').height>740?30:20,
        borderBottomRightRadius:  Dimensions.get('window').height>800?50:Dimensions.get('window').height>740?30:20,
        marginTop: Dimensions.get('window').height>740?Dimensions.get('window').height*0.60:Dimensions.get('window').height*0.55

    },
    containerSM: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#FFFFFF",
        width: "100%",
        height:
          Dimensions.get("window").height < 520 ? Dimensions.get("window").height * 0.5:Dimensions.get("window").height * 0.41 ,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
      },
    
    TextContainer: {
        position: "absolute",
        marginTop: '10%',
        marginLeft: '7%',
        width: '90%',
         marginRight: '4%',

    },
    Title: {
        color: '#333333',
        fontSize: 18,
        fontFamily: 'Montserrat_Bold',

    },
    Description: {
        color: '#AAAAAA',
        fontSize: Dimensions.get('window').height>600? 14:11,
        fontFamily: 'Montserrat',
        marginTop: Dimensions.get('window').height * 0.02,
        marginBottom: Dimensions.get("window").height > 667
        ? Dimensions.get("window").height * 0.02
        : Dimensions.get("window").height * 0.02,
    },
    duedate: {
        fontSize:Dimensions.get('window').height>600? 12:10,
        fontFamily: 'Montserrat_SemiBold',
        color: 'black',
        marginTop:Dimensions.get('window').height>740? Dimensions.get('window').height * 0.14:Dimensions.get('window').height * 0.18,
        position:'absolute',
    },
    termsAndCondition:{
        fontSize: Dimensions.get('window').height>600? 12:10,
        fontFamily: 'Montserrat_SemiBold',
        color: 'black',
        marginTop:Dimensions.get('window').height>740? Dimensions.get('window').height * 0.18:Dimensions.get('window').height * 0.22,
        position:'absolute',
        flex:1
    },
    chooseClassButton: {
        marginTop: Dimensions.get('window').height>740?Dimensions.get('window').height*0.27:Dimensions.get('screen').height*0.32,
        paddingHorizontal: "6%",

    }
});
export default DetailsCard;
