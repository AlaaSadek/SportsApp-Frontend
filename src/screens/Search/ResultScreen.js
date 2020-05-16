import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { getAllClassesByName } from '../../utils/SearchUtils';
import ScreenHeaderText from '../../components/global/ScreenHeaderText'
import SearchInput from '../../components/Search/SearchInput';
import LoadingModal from '../../components/global/LoadingModal'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton';
import DefaultClassList from '../../components/Class/ClassList/DefaultClassList';
import { getClassesByFilter } from '../../utils/SearchUtils'

const ResultScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const filters = navigation.getParam('filters');

    useEffect(
        () => {
            const x = async () => {

                setLoading(true);
                await refresh()
                setLoading(false);
            }
            x();
        }
        , []
    )

    const refresh = async () => {
        console.log('a',searchValue)
        if (!searchValue) {
            console.log('f',filters)
            await getClassesByFilter(filters).then(
                (res) => {
                    setResult(res);
                }
            )
        }
        else {
            await onSearch();
        }
    }
    const onSearch = async () => {
        setLoading(true);
        let res = await getAllClassesByName(searchValue);
        setResult(res);
        setLoading(false)
    }
    return <View style={styles.container}>
        <LoadingModal modalVisible={loading} />
        <View style={{ width: '50%', alignSelf: 'flex-end' }} >

            <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onSearch={onSearch}
            />
        </View>
        <ScreenHeaderText headerText="Result" />

        <DefaultClassList refresh={refresh} displayDetails={true} classes={result} />
    </View>
}


ResultScreen.navigationOptions = (props) => {
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
                <SearchInput />
            )
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
});
export default ResultScreen;