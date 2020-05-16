import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ScreenHeaderText from '../components/global/ScreenHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';
import Announcements from "../components/Announcements/Announcements";
import DefaultClassList from "../components/Class/ClassList/DefaultClassList";
import { getAllClasses } from '../utils/ClassUtils';

const Main = ({ navigation }) => {
  const [classes, setClasses] = useState([])
  const refresh = async () => {
    await getAllClasses().then(res => { setClasses(res) })
  }
  useEffect(
    () => {

      refresh();
    }, []
  );
  return (
    <View style={styles.container}>

      <View >

        <View style={styles.headerText}>
          <ScreenHeaderText headerText={'Home'} />
        </View>
        <View style={styles.announcement_viewallcontainer}>
          <Text style={styles.announcementText}>Announcements</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('AllAnnouncements') }}><Text style={styles.viewallTest}>View All</Text></TouchableOpacity>

        </View>
        <Announcements onPress={() => navigation.navigate("AnnouncementDetail")} />

      </View>
      <View style={{ flex: 1, marginTop: '5%' }}>
        <DefaultClassList refresh={refresh} displayDetails={false} classes={classes} header="Popular Classes" />
      </View>
    </View>

  )
}

Main.navigationOptions = (props) => {
  return {

    title: "",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
          <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
        </HeaderButtons>
      )
    },
    headerRight: () => {
      return (<View style={{ flexDirection: 'row-reverse' }}>
        <HeaderButtons HeaderButtonComponent={HeaderButton} style={{}}>
          <Item title="menu" iconName='search' onPress={() => { props.navigation.navigate('ResultScreen') }} />
        </HeaderButtons>
        <TouchableOpacity style={styles.chooseClassButton} onPress={() => { props.navigation.navigate('CategoriesFilterScreen') }} >
          <Text style={styles.chooseClassText}>Choose your class</Text>
        </TouchableOpacity>
      </View>
      )
    },

    headerTitleStyle: {
      letterSpacing: 3,
      fontFamily: "Montserrat_SemiBold",
      fontSize: 15,
    },
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'transparent',
      elevation: 0
    },
    headerTintColor: '#020202',

  }
}

const styles = StyleSheet.create({
  container: {
    //padding: '5%',
    paddingBottom: 0,
    flex: 1,
    backgroundColor: 'white'
  },
  headerText: {
    marginLeft: '5%',
    marginBottom:'3%'
  },
  announcement_viewallcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  announcementText: {
    fontSize: 15,
    fontFamily: 'Montserrat_Bold',
    color: '#030303',
    marginBottom: '5%'
  },
  viewallTest: {
    fontSize: 15,
    fontFamily: 'Montserrat_SemiBold',
    color: '#D8365D',
    marginBottom: '5%'
  },
  anouncemtScroll: {
    marginTop: '5%'
  },
  chooseClassButton: {
    marginRight: 30

  },
  chooseClassText: {
    fontFamily: "Montserrat_SemiBold",
    fontSize: 15,
    letterSpacing: 3
  }
});
export default Main;