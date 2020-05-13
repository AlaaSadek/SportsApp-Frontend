import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Heart from '../../../assets/images/svg/heart'
import Hearto from '../../../assets/images/svg/hearto'
const RatingComponent = ({ maxRating, value, setValue }) => {

    const getRating = () => {
        let ret = [];
        for (let i = 0; i < value; i++) {
            ret.push(
                <TouchableOpacity style={styles.svgContainer} key={i.toString()} onPress={() => setValue(i)}>

                    <Heart height={styles.svg.height} width={styles.svg.width} />
                </TouchableOpacity>
            )
        }
        for (let i = value; i < maxRating; i++) {
            ret.push(
                <TouchableOpacity style={styles.svgContainer} key={i.toString()} onPress={() => setValue(i + 1)}>

                    <Hearto height={styles.svg.height} width={styles.svg.width} />
                </TouchableOpacity>
            )
        }
        return ret;
    }
    return (
        <View style={styles.container}>
            {
                getRating()
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    svgContainer: {
    }
    ,
    svg: {
        width: 25,
        height: 20,
    },
});
export default RatingComponent;