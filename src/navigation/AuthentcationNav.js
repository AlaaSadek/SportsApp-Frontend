import { createSwitchNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import ApplicationNav from "./ApplicationNav";
import SignUp from '../screens/User/SignUpScreen'
import ClassDescriptionScreen from '../screens/description/ClassDescriptionScreen';
import AnnouncementDetail from "../screens/Announcements/AnnouncementDetail";
import AllAnnouncements from "../screens/Announcements/AllAnnouncements";


export default AuthentcationNav = createSwitchNavigator({
  HomeScreen,
  SignInScreen,
  ApplicationNav,
  SignUp,
  ClassDescriptionScreen,
  AnnouncementDetail,
  AllAnnouncements,
},
  {
    initialRouteName: "HomeScreen",
  }
);


