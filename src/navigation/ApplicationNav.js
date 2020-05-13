import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import ClassDescriptionScreen from '../screens/description/ClassDescriptionScreen'


export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    ClassDescriptionScreen,
  },

  {
    initialRouteName: "MainScreen",
  }
);
