import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import ClassListTestScreen from '../screens/TestScreen/ClassListTestScreen';

export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    ClassListTestScreen
  },

  {
    initialRouteName: "MainScreen",
  }
);
