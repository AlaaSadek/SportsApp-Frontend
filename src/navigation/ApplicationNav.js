import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import AllAnnouncements from "../screens/Announcements/AllAnnouncements";
import AboutUs from "../screens/AboutUs";
import BranchesScreen from "../screens/Branches/BranchesScreen";
import MapHandlerScreen from "../screens/Branches/MapHandlerScreen";


export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    AllAnnouncements,
    AboutUs,
    BranchesScreen,
    MapHandlerScreen
  },

  {
    initialRouteName: "MainScreen",
  }
);
