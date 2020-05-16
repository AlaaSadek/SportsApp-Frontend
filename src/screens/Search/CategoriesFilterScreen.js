
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { getFiltersFromBackend } from '../../utils/SearchUtils'
import ScreenHeaderText from '../../components/global/ScreenHeaderText'
import FilterOptionsList from '../../components/Search/FilterOptionsList';
import MainButton from '../../components/global/MainButton'
import LoadingModal from '../../components/global/LoadingModal';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton';


const CategoriesFilterScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState(null);
    const [toBeSentFilters, setToBeSentFilters] = useState(null);
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
        Object.assign(copy, toBeSentFilters);
        if (copy[filterArrayName] && copy[filterArrayName].find(o => o == filterItem))
        {
            
            copy[filterArrayName].find(o => o == filterItem).state = !copy[filterArrayName].find(o => o == filterItem).state
        }
        else {
            if (!copy[filterArrayName])
                copy[filterArrayName] = []
            copy[filterArrayName].push({ ...filterItem, state: true })

        }
        setToBeSentFilters(copy)
    }
    const getSections = () => {
        return Object.keys(filters)
            .map(key => {
                return <FilterOptionsList toggleItemState={toggleItemState} key={key} filterArray={filters[key]} filterName={key} />
            })
    }
    const onSubmit = () => {
        navigation.navigate('ResultScreen', { filters: setToBeSentFilters })
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
CategoriesFilterScreen.navigationOptions = (props) => {
    return {

        title: '',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item style={styles.backIcon} title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <TouchableOpacity style={{ flexDirection: 'row-reverse', color: '#020202' }} >
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="menu" iconName='search' onPress={() => { }} />
                    </HeaderButtons>
                    <Text style={styles.searchText}>Search</Text>
                </TouchableOpacity>)
        },
        headerStyle: {
            shadowColor: 'transparent',
            elevation: 0

        },

    }
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
        flex: 1,
    }

});
export default CategoriesFilterScreen;