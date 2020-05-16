import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FilterOptionsListItem from './FilterOptionsListItem'
const FilterOptionsList = ({ filterArray, filterName, toggleItemState }) => {
    const getItems = () => {

        return filterArray.map(
            item => {
                return <FilterOptionsListItem toggleItemState={toggleItemState} filterName={filterName} item={item} key={item._id} />
            }
        )
    }
    return <View style={styles.headerText}>
        <Text style={styles.headerText}>{filterName}</Text>
        {
            filterArray ? getItems() : null
        }
    </View>
}

const styles = StyleSheet.create({
    container: {

    },
    headerText: {
        fontFamily: 'Montserrat_Bold',
        fontSize: 25 * (Math.min((Dimensions.get('window').height / 800.0), (Dimensions.get('window').width / 375.0))),
        color: '#D8365D',
        marginVertical: 5
    }

});
export default FilterOptionsList;