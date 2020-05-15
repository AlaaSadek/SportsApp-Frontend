import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { getAllClassesByName } from '../../utils/SearchUtils';
import ScreenHeaderText from '../../components/global/ScreenHeaderText'
import SearchInput from '../../components/Search/SearchInput';
import LoadingModal from '../../components/global/LoadingModal'
const ResultScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    useEffect(
        () => {
            const x = async () => {

                let res = navigation.getParam('result')
                if (!res) {
                    setLoading(true);
                    res = await getAllClassesByName('%20');
                    setLoading(false);
                }
                setResult(res);
            }
            x();
        }
        , []
    )
    const onSearch = async () => {
        setLoading(true);
        let res = await getAllClassesByName(searchValue);
        setLoading(false)
        setResult(res);
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
        <FlatList
            data={result}
            keyExtractor={(item) => item._id}
            renderItem={
                ({ item }) => {
                    return <Text>{item.name}</Text>
                }
            }
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        flex: 1,
        backgroundColor: 'white'
    },
});
export default ResultScreen;