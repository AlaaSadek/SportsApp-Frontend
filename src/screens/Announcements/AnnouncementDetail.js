import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import getAnnouncementDetail from '../../utils/AnnouncementDetails'
import DetailsCard from "../../components/global/DetailsCard";

const AnnouncementDetail = ({ navigation }) => {

    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        getAnnouncementDetail('5eba0169765dde0025832a77').then((result) => {
            setDataset(result);
        });
    }, []);
    return (


        <ImageBackground
            source={{ uri: dataset.imageLocation }}
            style={styles.Background}
            imageStyle={{ opacity: 0.6 }}

        >
            <DetailsCard
                title={dataset.title}
                description={dataset.description}
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