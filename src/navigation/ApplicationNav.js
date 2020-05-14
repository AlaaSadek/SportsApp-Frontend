import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import AnnouncementDetail from "../screens/Announcements/AnnouncementDetail"
import { createSwitchNavigator } from "react-navigation";

export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    AnnouncementDetail

  },

  {
    initialRouteName: "MainScreen",
  }
);
