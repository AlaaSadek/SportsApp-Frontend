import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import BranchesScreen from "../screens/Branches/BranchesScreen";
import MapHandlerScreen from "../screens/Branches/MapHandlerScreen";


export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    BranchesScreen,
    MapHandlerScreen
  },

  {
    initialRouteName: "MainScreen",
  }
);
