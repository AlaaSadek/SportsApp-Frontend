import React from "react";
import { View, StyleSheet, FlatList,ImageBackground, } from "react-native";

import DetailsCard from "../components/global/DetailsCard";
const AnnouncementDetail = ({ navigation }) => {
    const test = [
        {
            Title: "50% Discount",
            img:"https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
            Description: "Enjoy 50% discount for a week for all classes types and levels Hurry up and reserve your class now!",
            dueDate: "New Offer Valid till the end of this week Monday 25/4.",
            termsAndConditions: "Terms and conditions apply."
        }
    ];
    return (


        <View>
            <FlatList
                scrollEnabled={false}
                data={test}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ImageBackground
                    source={{ uri: item.img }}
                    style={styles.Background}>
                    <DetailsCard style={{ position: "absolute" }} Title={item.Title} Description={item.Description} dueDate={item.dueDate} termsAndConditions={item.termsAndConditions}> </DetailsCard>
                </ImageBackground>}

            />

        </View>



    );
};

const styles = StyleSheet.create({

    Background: {
        resizeMode: "stretch",
        width: '100%',
        height: '100%',
        backgroundColor: "#2C2626",

    },

});
export default AnnouncementDetail;