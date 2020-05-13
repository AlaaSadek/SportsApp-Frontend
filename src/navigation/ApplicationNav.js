import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from "react-navigation";
import testscreen from '../screens/testscreen'
import TestScreen2 from '../screens/TestScreen2'

import React from 'react'
const ApplicationNav = createStackNavigator(
  {
    MainScreen:{
      screen:MainScreen,
      navigationOptions:{}
    },
    testscreen,
    TestScreen2

  },

);


import SideDrawer from '../components/global/SideDrawer'
import { Feather, AntDesign } from "@expo/vector-icons";

const MainNav = createDrawerNavigator(
  {
    MainScreen: {
      screen: ApplicationNav,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: <Feather name="home" size={20} style={{ color: '#494EAD' }}></Feather>,

      }

    },
    testscreen: {
      screen: ApplicationNav,
      navigationOptions: {
        drawerLabel: 'Reserved Classes',
        drawerIcon: <AntDesign name="calendar" size={20} style={{ color: '#494EAD' }}></AntDesign>

      }
    },

  },
  {
    contentComponent: props => <SideDrawer   {...props} />
    , contentOptions: {
      activeTintColor: '',
      activeBackgroundColor: '',
      labelStyle: {
        fontFamily: 'Montserrat_SemiBold',
        color: '#1C1C1C',
        marginLeft: -14,
        fontSize: 14

      }

    }
  }

);

export default createAppContainer(MainNav);
