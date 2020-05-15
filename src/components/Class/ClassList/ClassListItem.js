import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
const getFormatedDate = (date) => {
    let newDate = new Date(date);
    return newDate.toUTCString()
}
const ClassListItem = ({ classItem, displayDetails, children }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => { console.log(`navigate to this ${classItem.name}`) }} >

                <View style={styles.leftContainer}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={{ uri: classItem.imageURL }}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.titleText}>
                            {classItem.name}
                        </Text>
                        <Text style={styles.infoText}>
                            {classItem.level} {displayDetails ? '-' + classItem.branch : null}
                        </Text>
                        {
                            displayDetails ? <Text style={styles.infoText}>{getFormatedDate(classItem.date)}</Text> : null
                        }
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.sideComponentContainer}>
                {children ? React.cloneElement(children, { classItem }) : null}
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
        maxWidth: '80%'
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
    sideComponentContainer: {
        height: '100%'
    }
});
export default ClassListItem;