import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";

export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
  },

  {
    initialRouteName: "MainScreen",
  }
);
