import { createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import ApplicationNav from "./ApplicationNav";

export default AuthentcationNav = createSwitchNavigator({
  HomeScreen,
  SignInScreen,
  ApplicationNav,
},
{
  initialRouteName: "HomeScreen",
}
);

