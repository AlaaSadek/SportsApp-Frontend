import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';

const SideDrawer = (props) => {
    const test = [
        {
            name: "Sophie Garnier",
            img: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
            number: "01022739279",

        }
    ];
    return (
        <View>
            <View style={styles.ProfileContainer}>
                <FlatList
                    data={test}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: item.img }} style={styles.img}>
                            </Image>
                            <View style={styles.TextContainer}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.numberText}>{item.number}</Text>
                            </View>
                        </View>
                    </View>}>

                </FlatList>

            </View>
            <View >
                <DrawerItems {...props} fontSize={12}>

                </DrawerItems>
                <View style={{ flexDirection: 'column-reverse' }}>
                    <TouchableOpacity style={styles.logoutButton}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-log-out" size={22} style={styles.logoutIcon}></Ionicons>
                            <Text style={styles.logoutText} >Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ProfileContainer: {
        backgroundColor: '#DCDDE6',
        height: '45%'
    },
    img: {
        height: '55%',
        borderRadius: 45,
        width: '25%',
        marginLeft: 20,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: '30%'
    },
    TextContainer: {
        marginLeft: 10,
        marginTop: '35%'
    },
    nameText: {
        color: '#494EAD',
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 15,
    },
    numberText: {
        color: '#181461',
        fontSize: 14
    },
    logoutButton: {
        marginLeft: '7%'
    },
    logoutIcon: {
        color: '#494EAD',
        marginRight: '2%'
    },
    logoutText: {
        fontFamily: 'Montserrat_SemiBold'
    }
});

export default SideDrawer;