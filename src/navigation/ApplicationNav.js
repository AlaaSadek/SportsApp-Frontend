import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import BranchesScreen from "../screens/Branches/BranchesScreen";
import MapHandlerScreen from "../screens/Branches/MapHandlerScreen";
import CategoriesFilterScreen from '../screens/Search/CategoriesFilterScreen';
import ResultScreen from '../screens//Search/ResultScreen'
export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    BranchesScreen,
    MapHandlerScreen,
    CategoriesFilterScreen,
    ResultScreen
  },

  {
    initialRouteName: "MainScreen",
  }
);
