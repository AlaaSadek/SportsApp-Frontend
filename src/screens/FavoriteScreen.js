import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import ScreenHeaderText from '../components/global/ScreenHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';
import DefaultClassList from '../components/Class/ClassList/DefaultClassList'
import BackendAxios from '../services/backendAxios'

const FavoriteScreen = () => {
  const [favoriteClasses, setFavoriteClasses] = useState([])
  const refresh = async () => {
    await BackendAxios.get('/class/FavouriteClasses')
      .then(res => { setFavoriteClasses(res.data.payload.map(c => { return { ...c, isLiked: true } })) })

  }
  useEffect(
    () => {

      refresh();
    }, []
  )
  return (

    <View style={{ margin: '3%', marginTop: 50, width: '100%' }}>
      <ScreenHeaderText headerText="Favorites" />
      <View style={{ height: '100%', width: '100%' }}>
        <DefaultClassList refresh={refresh} classes={favoriteClasses} />
      </View>
    </View>
  );
};
FavoriteScreen.navigationOptions = (props) => {
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

export default FavoriteScreen;
