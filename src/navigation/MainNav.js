import { createSwitchNavigator } from "react-navigation";

import SplashScreen from "../screens/SplashScreen";
import AuthentcationNav from './AuthentcationNav'
export default MainNavigator = createSwitchNavigator(
  {
    SplashScreen,
    AuthentcationNav,
  },
  {
    initialRouteName: "AuthentcationNav",
  }
);
