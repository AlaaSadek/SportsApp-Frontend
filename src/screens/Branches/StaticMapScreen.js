import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import ENV from '../../../env'
const StaticMapScreen = ({ marks }) => {

    const getURL = () => {
        let marksURL = ''
        for (let i = 0; i < marks.length; i++) {
            marksURL += `&markers=color:blue%7Clabel:A%7C${marks[i].latitude},${marks[i].longitude}`
        }
        const url =
            `https://maps.googleapis.com/maps/api/staticmap?center=${marks[0].latitude},${marks[0].longitude}&zoom=15&size=${parseInt(Dimensions.get('window').width)}x${parseInt(Dimensions.get('window').height)}&maptype=roadmap${marksURL}&key=${ENV.API_KEY}`
        return url;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: getURL() }} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: '100%',
        width: '100%',
    }
});

export default StaticMapScreen;