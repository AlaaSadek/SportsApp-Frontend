import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';
import CancelableClassList from "../components/Class/ClassList/CancelableClassList";
import BackendAxios from '../services/backendAxios'
import ScreenHeaderText from "../components/global/ScreenHeaderText";


const ReservedClassesScreen = () => {
  const [reservedClasses, setReservedClasses] = useState([])
  const refresh = async () => {
    await BackendAxios.get('/class/reservedclasses')
      .then(res => { setReservedClasses(res.data.payload) })
  }
  useEffect(
    () => {
      refresh();
    }, []
  )
  return (
    <View style={{ margin: 30, marginTop: 50 }}>
      <ScreenHeaderText headerText={"Reserved Classes"}></ScreenHeaderText>
      <View style={{height:'100%'}}>

      <CancelableClassList refresh={refresh} classes={reservedClasses} />
      </View>
    </View>
  );
};
ReservedClassesScreen.navigationOptions = (props) => {
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

    headertransparent: true,

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default ReservedClassesScreen;
