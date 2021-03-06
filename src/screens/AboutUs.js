import React from "react";
import {
  Text, View, StyleSheet, Dimensions,TouchableOpacity
} from "react-native";
import ScreenHeaderText from "../components/global/ScreenHeaderText";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';

const AboutUs = ({ navigation }) => {
  return (

    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={"always"}
      style={{ flex: 1 }}
      showsVerticalScrollIndicat
      or={false}
    >
      <View style={styles.mainContainer} >
        <View style={styles.header}>
          <ScreenHeaderText headerText={"About Us"}></ScreenHeaderText>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.subheader}>Our Vision</Text>
          <Text style={styles.paragraph}>
            A future where sport is seen as an essential tool in international
            development and its effectiveness is further enhanced by having sports
            places all around the world.
      </Text>

          <Text style={styles.subheader}>Our Mission</Text>
          <Text style={styles.paragraph}>
            A community to share knowledge, build good practice, coordinate with
            others and create partnerships.
      </Text>
          <Text style={styles.subheader}>Goals</Text>
          <Text style={styles.paragraph}>
            Increase the visibility of sport’s development potential among the
            target groups of our community. Contribute to improving sport and
            development practice. Encourage dialogue, promote partnership building
            and facilitate strategic alliances.
      </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
AboutUs.navigationOptions = (props) => {
  return {
    title: '',
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item style={styles.backIcon} title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
    </HeaderButtons>
      )
    },
   
    headertransparent:true,
  
  }
}



const styles = StyleSheet.create({
  mainContainer:{
    marginTop:'12%',
},
  header: {
    marginTop: "4%",
    marginLeft: "8%",
  },
  contentContainer: {
    marginTop: "2%",
    marginLeft: "9%",
  },
  subheader: {
    fontSize: 22,
    fontFamily: "Montserrat_Bold",
    color: "#D8365D",
    marginTop: "4%",
    marginBottom: "2%",

  },
  paragraph: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#AAAAAA",
    marginLeft: "1%",
    marginRight: "8%",

  },

});

export default AboutUs;
