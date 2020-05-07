import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
// import { createDrawerNavigator , DrawerItems,toggleDrawer} from 'react-navigation-drawer';
import { Left, Right} from 'native-base';


  
const HeaderNavigation = (props) => {
    
    // const openMenu=()=>{
    //     navigation.openDrawer();
    // }
    return (

        <View style={styles.container}>
            <Left>
                <TouchableOpacity onPress={()=>{props.menuButtonPress()}} style={{ width: 60 }}>
                    <Ionicons name='ios-menu' size={30} color='black' />
                </TouchableOpacity>
            </Left>
            <TouchableOpacity style={styles.chooseClassButton} onPress={() => {props.chooseClassPress()}} >
                <Text style={styles.chooseClassText}>Choose your class</Text>
            </TouchableOpacity>
            <Right>
                <TouchableOpacity onPress={() => {props.searchButtonPress()}} >
                    <Ionicons name='ios-search' size={27} color='black' />
                </TouchableOpacity>
            </Right>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    chooseClassButton: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    chooseClassText: {
        fontFamily: "Montserrat_SemiBold",
        fontSize: 15,
        letterSpacing:3
    }
})
export default HeaderNavigation;