import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import getAnnouncementDetail from '../../../utils/AnnouncementDetails'
import DetailsCard from "../../../components/global/DetailsCard";

const AnnouncementDetail = ({ navigation }) => {

    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        getAnnouncementDetail('5eb9fc97765dde0025832a70').then((result) => {
            setDataset(result);
        });
    }, []);
    return (


        <ImageBackground
            source={{ uri: dataset.announcementImage }}
            style={styles.Background}
            imageStyle={{ opacity: 0.6 }}

        >
            <DetailsCard
                title={dataset.title}
                description={dataset.description}
                // dueDate={dataset.dueDate}
                termsConditions={dataset.termsConditions}
            ></DetailsCard>
        </ImageBackground>

    );
};
AnnouncementDetail.navigationOptions = (props) => {
    return {
        title: '',
        headerTransparent: true
    }
}
const styles = StyleSheet.create({

    Background: {
        resizeMode: "stretch",
        width: '100%',
        height: '100%',
        backgroundColor: "#2C2626",

    },

});
export default AnnouncementDetail;