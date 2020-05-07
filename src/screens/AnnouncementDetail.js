import React from "react";
import { View, StyleSheet, FlatList, Text, ImageBackground, Dimensions } from "react-native";
import yoga from "../../assets/images/Yoga.jpg";
import MainButton from "../components/global/MainButton";
const AnnouncementDetail = ({ props }) => {
    const test = [
        {
            Title: "50% Discount",
            Description: "Enjoy 50% discount for a week for all classes types and levels Hurry up and reserve your class now!",
            Notes: "*New Offer Valid till the end of this week Monday, 25/4. *Terms and conditions apply."
        },

    ];
    return (

        <ImageBackground source={yoga} style={styles.Background}>
            <View style={styles.container}>

                <View style={styles.TextContainer}>
                    <FlatList
                        data={test}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <View>
                            <Text style={styles.Title}>{item.Title}</Text>
                            <Text style={styles.Description} >{item.Description}</Text>
                            <Text style={styles.announcementNotes}>{item.Notes}</Text>
                            <MainButton
                                firstGradient="#1D55C5"
                                secondGradient="#E93354"
                                style={styles.chooseClassButton}
                                onPress={() => { console.log('choose your class') }}
                            >
                                Choose your class
                            </MainButton>

                        </View>}
                    />
                </View>

            </View>
        </ImageBackground>


    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: Dimensions.get('window').height >800? '42%':'47%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        marginTop: Dimensions.get('window').height>800?'125%':'93.5%'

    },
    Background: {
        resizeMode: "stretch",
        width: '100%',
        height: '100%',
        backgroundColor: "#2C2626",

    },
    TextContainer: {
        position: "absolute",
        marginTop: '10%',
        marginLeft: '10%',
        width: '90%',
        marginRight: '10%',

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
        marginBottom: Dimensions.get('window').height * 0.03


    },
    announcementNotes: {
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold',
        color: '#333333',
        marginBottom: Dimensions.get('window').height * 0.04
    },
    chooseClassButton: {
        //  marginTop: Dimensions.get('window').height*0.01,
        paddingHorizontal: "6%",
    }
});
export default AnnouncementDetail;