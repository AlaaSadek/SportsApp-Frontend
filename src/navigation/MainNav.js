import { createSwitchNavigator } from "react-navigation";

import SplashScreen from "../screens/SplashScreen";
import SignUp from "../screens/User/SignUp"
export default MainNavigator = createSwitchNavigator(
  {
    //SplashScreen,
    SignUp
  },
  {
    initialRouteName: "SignUp",
  }
);
