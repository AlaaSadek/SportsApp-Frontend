import { createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";

export default AuthentcationNav = createSwitchNavigator({
  HomeScreen,
  SignInScreen,
},
{
  initialRouteName: "HomeScreen",
}
);

