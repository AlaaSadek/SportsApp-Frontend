
import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions ,ImageBackground} from "react-native";
import MainButton from "./MainButton";
const DetailsCard = ( props ) => {
    
    return (

        
            <View style={styles.container}>
                <View style={styles.TextContainer}>
                    
                            <Text style={styles.Title}>{props.Title}</Text>
                            <Text style={styles.Description} >{props.Description}</Text>
                            <Text style={styles.duedate}>{props.dueDate}</Text>
                            <Text style={styles.termsAndCondition}>{props.termsAndConditions}</Text>

                            <MainButton
                                firstGradient="#1D55C5"
                                secondGradient="#E93354"
                                style={styles.chooseClassButton}
                                onPress={()=>{console.log('Choose class')}}
                                
                            >
                                Choose your class
                            </MainButton>
                        </View>
                    
            </View>
     


    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height:Dimensions.get('window').height>740? Dimensions.get('window').height*0.40:Dimensions.get('screen').height*0.45,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        marginTop: Dimensions.get('window').height>740?Dimensions.get('window').height*0.60:Dimensions.get('screen').height*0.55

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
        fontSize: 14,
        fontFamily: 'Montserrat',
        marginTop: Dimensions.get('window').height * 0.02,
        marginBottom:Dimensions.get('window').height>740? Dimensions.get('window').height * 0.07:Dimensions.get('window').height * 0.09,


    },
    duedate: {
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold',
        color: 'black',
        marginTop:Dimensions.get('window').height>740? Dimensions.get('window').height * 0.16:Dimensions.get('window').height * 0.18,
        position:'absolute',
    },
    termsAndCondition:{
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold',
        color: 'black',
        marginTop:Dimensions.get('window').height>740? Dimensions.get('window').height * 0.18:Dimensions.get('window').height * 0.23,
        position:'absolute'
    },
    chooseClassButton: {
        marginTop: Dimensions.get('window').height>740?Dimensions.get('window').height*0.06:Dimensions.get('screen').height*0.04,
        paddingHorizontal: "6%",

    }
});
export default DetailsCard;
