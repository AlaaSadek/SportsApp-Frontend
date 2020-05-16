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
import ResultScreen from '../screens//Search/ResultScreen'
export default ApplicationNav = createStackNavigator(
  {
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
    ResultScreen
  },

  {
    initialRouteName: "MainScreen",
  }
);
