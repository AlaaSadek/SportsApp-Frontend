

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { getFiltersFromBackend, getClassesByFilter } from '../../utils/SearchUtils'
import ScreenHeaderText from '../../components/global/ScreenHeaderText'
import FilterOptionsList from '../../components/Search/FilterOptionsList';
import MainButton from '../../components/global/MainButton'
import LoadingModal from '../../components/global/LoadingModal'
const CategoriesFilterScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState(null);
    useEffect(
        () => {
            const x = async () => {
                setLoading(true);
                getFiltersFromBackend().then(
                    ret => {
                        setFilters(ret);
                        setLoading(false)
                    }
                )
            }
            x();
        }
        , []
    )
    const toggleItemState = (filterArrayName, filterItem) => {
        const copy = {};
        Object.assign(copy, filters);
        copy[filterArrayName].find(o => o == filterItem).state = !copy[filterArrayName].find(o => o == filterItem).state

        setFilters(copy)
    }
    const getSections = () => {
        return Object.keys(filters)
            .map(key => {
                return <FilterOptionsList toggleItemState={toggleItemState} key={key} filterArray={filters[key]} filterName={key} />
            })
    }
    const onSubmit = () => {
        setLoading(true);
        getClassesByFilter(filters).then(
            (res) => {
                setLoading(false);
                
                navigation.navigate('ResultScreen', { result: res })
            }
        )

    }
    return <View style={styles.container}>
        <View style={styles.headerTextContainer}>

            <ScreenHeaderText headerText="Categories" />
        </View>
        <View style={styles.listContainer}>

            <ScrollView >
                {
                    filters ? getSections() : null
                }
            </ScrollView>
        </View>

        <View style={styles.buttonContainer}>

            <MainButton
                firstGradient="#1D55C5"
                secondGradient="#E93354"
                onPress={() => onSubmit()}
            >
                Find Results
          </MainButton>
        </View>
        <LoadingModal modalVisible={loading} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        flex: 1,
        backgroundColor: 'white'
    },
    listContainer: {
        marginVertical: 20,
        marginHorizontal: 5,
        flex: 20
    },
    buttonContainer: {
        flex: 1
    },
    headerTextContainer: {
        flex: 1
    }

});
export default CategoriesFilterScreen;