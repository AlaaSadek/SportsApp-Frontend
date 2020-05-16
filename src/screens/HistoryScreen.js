import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ScreenHeaderText from '../components/global/ScreenHeaderText'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';
import RateableClassList from "../components/Class/ClassList/RateableClassList";
import BackendAxios from '../services/backendAxios'

const HistoryScreen = () => {
  const [historyClasses, setHistoryClasses] = useState([])
  const refresh = async () => {
    await BackendAxios.get('/class/history')
      .then(res => { setHistoryClasses(res.data.payload) })

  }
  useEffect(
    () => {

      refresh();
    }, []
  )
  return (
    <View style={{ margin: 30, marginTop: 60 }}>
      <ScreenHeaderText headerText={"History"}></ScreenHeaderText>
      <View style={{ height: '100%' }}>

        <RateableClassList refresh={refresh} classes={historyClasses} />
      </View>
    </View>


  );
};

HistoryScreen.navigationOptions = (props) => {
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
export default HistoryScreen;
