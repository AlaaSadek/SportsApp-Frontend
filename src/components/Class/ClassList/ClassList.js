import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import ClassListItem from './ClassListItem'

const ClassList = ({ classes, header, displayDetails, children }) => {
    return (
        <View style={styles.container}>
            {header ? <Text style={styles.header}>{header}</Text> : null}
            <View style={styles.listContainer}>

                <FlatList

                    data={classes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ClassListItem displayDetails classItem={item} >
                                {children}
                            </ClassListItem>
                        );
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        paddingVertical: 10,
        flex: 1,
    },
    header: {
        marginLeft: 20,
        fontFamily: 'Montserrat_Bold', fontSize: 15
    }
});
export default ClassList;