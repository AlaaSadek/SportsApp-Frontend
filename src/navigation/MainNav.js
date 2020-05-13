import { createSwitchNavigator } from "react-navigation";

import SplashScreen from "../screens/SplashScreen";

import AuthentcationNav from "./AuthentcationNav";
import ApplicationNav from "./ApplicationNav";
import AnnouncementDetail from "../screens/User/Announcements/AnnouncementDetail"
export default MainNavigator = createSwitchNavigator(
  {
    SplashScreen,
    AuthentcationNav,
    ApplicationNav,
    AnnouncementDetail
  },
  {
    initialRouteName: "SplashScreen",
  }
);
