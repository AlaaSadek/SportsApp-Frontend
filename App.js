import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import MainNav from "./src/navigation/MainNav";
import { Provider } from 'react-redux';
import store from './src/store/index';

const App = createAppContainer(MainNav);

const fetchFonts = () => {
  return Font.loadAsync({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Montserrat_SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat_Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });
};
export default () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={(err) => {}}
      />
    );
  }
  return(
    <Provider store={store}>
      <App />
 </Provider>
  )
};
