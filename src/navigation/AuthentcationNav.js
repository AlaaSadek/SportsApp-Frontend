import { createSwitchNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import ApplicationNav from "./ApplicationNav";
import SignUp from '../screens/User/SignUpScreen'

export default AuthentcationNav = createSwitchNavigator({
  HomeScreen,
  SignInScreen,
  ApplicationNav,
  SignUp,
},
  {
    initialRouteName: "HomeScreen",
  }
);


