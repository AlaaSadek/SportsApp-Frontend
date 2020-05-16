import React, { useState } from 'react';
import { View, StyleSheet, Switch,Text } from 'react-native';
import InteractiveMapScreen from './InteractiveMapScreen';
import StaticMapScreen from './StaticMapScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton';

const MapHandlerScreen = ({ navigation }) => {
    const [interactive, setInterActive] = useState(true);
    const marks = navigation.getParam('marks')
    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text>Interactive : </Text>
                <Switch
                    value={interactive}
                    onValueChange={v => {
                        setInterActive(v);
                    }}
                />
            </View>
            <View style={styles.mapContainer}>

                {interactive ?
                    <InteractiveMapScreen marks={marks} /> :
                    <StaticMapScreen marks={marks} />
                }
            </View>
        </View>
    )
}
MapHandlerScreen.navigationOptions = (props) => {
    return {
      title: '',
      headerTransparent: true,
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item style={styles.backIcon} title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
      </HeaderButtons>
        )
      },
     
      headertransparent:true,
    
    }
  }
  
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        
    },
    mapContainer: {
        height: '100%',
        width: '100%'
    },
    switchContainer: {
         flexDirection: 'row',
         position:'absolute',
         zIndex:1,
         backgroundColor:'rgba(255,255,255,0.1)',
         borderRadius:10,
         borderWidth:1,
         padding:3,
         margin:60
    }
});
export default MapHandlerScreen;