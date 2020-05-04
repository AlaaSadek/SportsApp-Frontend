import { createSwitchNavigator } from "react-navigation";

import SplashScreen from "../screens/SplashScreen";

import AuthentcationNav from "./AuthentcationNav";
import ApplicationNav from "./ApplicationNav";

export default MainNavigator = createSwitchNavigator(
  {
    SplashScreen,
    AuthentcationNav,
    ApplicationNav,
  },
  {
    initialRouteName: "AuthentcationNav",
  }
);
