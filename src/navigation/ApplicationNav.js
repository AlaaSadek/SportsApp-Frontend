import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import ClassListTestScreen from '../screens/TestScreen/ClassListTestScreen';
import ClassDescriptionScreen from '../screens/description/ClassDescriptionScreen'
import AnnouncementDetail from "../screens/Announcements/AnnouncementDetail";
import AllAnnouncements from "../screens/Announcements/AllAnnouncements";
import AboutUs from "../screens/AboutUs";
import BranchesScreen from "../screens/Branches/BranchesScreen";
import AccountSettingsScreen from '../screens/User/AccountSettingsScreen'
import MapHandlerScreen from "../screens/Branches/MapHandlerScreen";
import CategoriesFilterScreen from '../screens/Search/CategoriesFilterScreen';
import ResultScreen from '../screens//Search/ResultScreen';
import Main from '../screens/Main';
import SideDrawer from '../components/global/SideDrawer';
import { Feather, AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { createDrawerNavigator } from 'react-navigation-drawer'
import React from 'react';
import { createAppContainer } from "react-navigation";
import ReservedClassesScreen from '../screens/ReservedClassesScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FavoriteScreen  from '../screens/FavoriteScreen';
import AccountSettingsScreen from '../screens/AccountSettingsScreen';
const ApplicationNav = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    ReservedClassesScreen:{
      screen:ReservedClassesScreen
    },
    BranchesScreen:{
      screen:BranchesScreen
    },
    HistoryScreen:{
      screen:HistoryScreen
    },
    FavoriteScreen:{
      screen:FavoriteScreen
    },
    AccountSettingsScreen:{
      screen:AccountSettingsScreen
    },
    AboutUs:{
      screen:AboutUs
    },
    MainScreen,
    ClassListTestScreen,
    ClassDescriptionScreen,
    AnnouncementDetail,
    AllAnnouncements,
    AboutUs,
    BranchesScreen,
    AccountSettingsScreen,
    MapHandlerScreen,
    CategoriesFilterScreen,
    ResultScreen,
   

  },
);
const MainNav = createDrawerNavigator(
  {
    Main: {
      screen: ApplicationNav,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: <Feather name="home" size={20} style={{ color: '#494EAD' }}></Feather>,
      }
      },
      ReservedClassesScreen: {
        screen: ApplicationNav,
        navigationOptions: {
          drawerLabel:'Reserved Classes',
          drawerIcon: <AntDesign name="calendar" size={20} style={{ color: '#494EAD' }}></AntDesign>

        }
      },
      BranchesScreen:{
        screen:ApplicationNav,
        navigationOptions:{
          drawerLabel:'Our Branches',
          drawerIcon: <EvilIcons name="location" size={25} style={{ color: '#494EAD' }}></EvilIcons>
        }
      },
      HistoryScreen:{
        screen:ApplicationNav,
        navigationOptions:{
          drawerLabel:'History',
          drawerIcon: <AntDesign name="filetext1" size={20} style={{ color: '#494EAD' }}></AntDesign>
        }
      },
      FavoriteScreen:{
        screen:ApplicationNav,
        navigationOptions:{
          drawerLabel:'Favorites',
          drawerIcon: <AntDesign name="hearto" size={20} style={{ color: '#494EAD' }}></AntDesign>
        }
      },
      AccountSettingsScreen:{
        screen :ApplicationNav,
        navigationOptions:{
          drawerLabel:'Account Settings',
          drawerIcon: <MaterialCommunityIcons name="account-circle-outline" size={20} style={{ color: '#494EAD' }}></MaterialCommunityIcons>

        }
      },
      AboutUs:{
        screen:ApplicationNav,
        navigationOptions:{
          drawerLabel:'About Us',
          drawerIcon: <Octicons name="info" size={20} style={{ color: '#494EAD' }}></Octicons>
        }
      }

    

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