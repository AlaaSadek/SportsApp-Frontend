import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import BranchesScreen from "../screens/Branches/BranchesScreen";
//import MapHandlerScreen from "../screens/Branches/MapHandlerScreen";
import AccountSettingsScreen from '../screens/User/AccountSettingsScreen'

export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    BranchesScreen,
    //MapHandlerScreen,
    AccountSettingsScreen
  },

  {
    initialRouteName: "MainScreen",
  }
);
