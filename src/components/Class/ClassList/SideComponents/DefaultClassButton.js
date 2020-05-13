import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Heart from '../../../../../assets/images/svg/heart.svg'
import Hearto from '../../../../../assets/images/svg/hearto.svg'
import Plus from '../../../../../assets/images/svg/plus.svg'

const DefaultClassButton = ({ classItem }) => {
    return (
        <View style={styles.svgContainer}>
            <TouchableOpacity onPress={() => { console.log(`navigate to this ${classItem.name}`) }}>

                <Plus height={styles.svg.height} width={styles.svg.width} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                console.log(`change like state of ${classItem.name}`)
            }}>
                {
                    classItem.isLiked ?
                        <Heart height={styles.svg.height} width={styles.svg.width} />
                        : <Hearto height={styles.svg.height} width={styles.svg.width} />
                }
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    svgContainer: {
        width: 50,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 5
    },
    svg: {
        width: 20,
        height: 20,
    }
});

export default DefaultClassButton;