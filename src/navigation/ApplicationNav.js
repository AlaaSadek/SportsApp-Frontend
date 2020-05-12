import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import AboutUs from "../screens/AboutUs";

export default ApplicationNav = createStackNavigator(
  {
    MainScreen,
    AboutUs,
  },

  {
    initialRouteName: "MainScreen",
  }
);
