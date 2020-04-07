import { createSwitchNavigator } from "react-navigation";

import SplashScreen from "../screens/SplashScreen";
export default MainNavigator = createSwitchNavigator(
  {
    SplashScreen,
  },
  {
    initialRouteName: "SplashScreen",
  }
);
