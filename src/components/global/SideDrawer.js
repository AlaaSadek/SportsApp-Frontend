import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import getProfileData from '../../utils/ProfileData';
import { clearToken } from "../../utils/LocalStorage";


const SideDrawer = (props) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getProfileData().then((result) => {
            setUserData(result);
        });
    }, []);

    return (
        <View>
            <View style={styles.ProfileContainer}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: userData.profilePicture }} style={styles.img}></Image>
                        <View style={styles.TextContainer}>
                            <Text style={styles.nameText}>{userData.fullName}</Text>
                            <Text style={styles.numberText}>{userData.mobile}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View >
                <DrawerItems {...props} fontSize={12}>

                </DrawerItems>
                <View style={{ flexDirection: 'column-reverse' }}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                        clearToken();
                        props.navigation.navigate("SplashScreen");
                    }}>
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
        height: Dimensions.get("window").height * 0.3

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
        marginLeft: '7%',
        marginTop: Dimensions.get("window").height * 0.1
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