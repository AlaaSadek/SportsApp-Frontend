import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Heart from '../../../../assets/images/svg/classIcons/heart.svg'
import Hearto from '../../../../assets/images/svg/classIcons/hearto.svg'
import Plus from '../../../../assets/images/svg/classIcons/plus.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
const ClassListItem = ({ classItem, displayDetails }) => {

    return (

        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => { console.log(`navigate to this ${classItem.name}`) }} >

                <View style={styles.leftContainer}>

                    <View style={styles.imgContainer}>

                        <Image
                            source={
                                {
                                    uri: classItem.img
                                }
                            }
                            style={styles.img}

                        />
                    </View>
                    <View style={styles.infoContainer}>

                        <Text style={styles.titleText}>
                            {classItem.name}
                        </Text>

                        <Text style={styles.infoText}>
                            {classItem.level} {displayDetails ? '-' + classItem.place : null}
                        </Text>
                        {
                            displayDetails ? <Text style={styles.infoText}>{classItem.date}</Text> : null
                        }
                    </View>
                </View>

            </TouchableOpacity>
            <View style={styles.svgContainer}>
                <TouchableOpacity onPress={() => { console.log(`navigate to this ${classItem.name}`) }}>

                    <Plus height={styles.svg.height} width={styles.svg.width} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log(`change like state of ${classItem.name}`) }}>
                    {
                        classItem.liked ?
                            <Heart height={styles.svg.height} width={styles.svg.width} />
                            : <Hearto height={styles.svg.height} width={styles.svg.width} />
                    }
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginBottom: '5%',
        flex: 1
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15
    },
    infoContainer: {
    },
    titleText: {
        fontFamily: 'Montserrat_Bold',
        fontSize: 15,
        marginBottom: 5
    },
    infoText: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        // borderWidth:2
    },
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
export default ClassListItem;