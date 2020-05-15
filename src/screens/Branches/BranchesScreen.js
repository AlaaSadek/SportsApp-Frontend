import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import ScreenHeaderText from '../../components/global/ScreenHeaderText'
// import Mark from '../../../assets/images/svg/mapMark'
import { getAllBranches } from '../../utils/BranchesUtils';

const BranchesScreen = ({ navigation }) => {

    const [branches, setBranches] = useState([]);

    useEffect(
        () => {
            const externalCall = async () => {
                const temp = await getAllBranches();
                setBranches(temp);
            }
            externalCall();
        }
        , []
    )
    return <View style={styles.container}>
        <ScreenHeaderText headerText="Our Branches" />
        <FlatList
            data={branches}
            keyExtractor={(item, index) => { return item._id.toString() }}

            renderItem={
                ({ item }) => {
                    return (
                        <View
                            style={styles.itemContainer}
                        >

                            <TouchableOpacity
                                style={{ width: '100%', flexDirection: 'row' }}
                                onPress={() => {
                                    navigation.navigate('MapHandlerScreen', { marks: [item] })
                                }
                                }
                            >
                                <View style={styles.svgContainer}>

                                    {/* <Mark height={styles.svg.height} width={styles.svg.width} /> */}
                                </View>
                                <Text style={styles.text}>{item.place}</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }
            }
        />

    </View>
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: '5%',
        height: '100%'
    },
    itemContainer: {
        marginTop: '5%',
        marginHorizontal: '5%'
    },
    svgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '3%'
    },
    svg: {
        width: 14,
        height: 18
    },
    text: {
        fontSize: 22,
        fontFamily: 'Montserrat_SemiBold',
        textAlignVertical: 'center',
    }
});

export default BranchesScreen;