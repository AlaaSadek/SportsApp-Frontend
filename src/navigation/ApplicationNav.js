import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import AnnouncementDetail from '../screens/AnnouncementDetail';
import { createSwitchNavigator } from "react-navigation";

export default ApplicationNav = createSwitchNavigator(
  {
    MainScreen,
    AnnouncementDetail

  },

  {
    initialRouteName: "MainScreen",
  }
);
