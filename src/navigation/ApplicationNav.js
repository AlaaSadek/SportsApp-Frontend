import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import AllAnnouncements from "../screens/AllAnnouncements";

export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    AllAnnouncements,
  },

  {
    initialRouteName: "MainScreen",
  }
);
