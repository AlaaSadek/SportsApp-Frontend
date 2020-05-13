import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import CategoriesScreen from "../screens/CategoriesScreen"
import SearchScreen from '../screens/SearchScreen'
export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    CategoriesScreen,
    SearchScreen
  },

  {
    initialRouteName: "MainScreen",
  }
);
