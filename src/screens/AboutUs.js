import React from "react";
import { Text, View, StyleSheet, Dimensions,
} from "react-native";
import ScreenHeaderText from "../components/global/ScreenHeaderText";

const AboutUs = ({ navigation }) => {
  return (
    <View>
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
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: "12%",
    marginLeft: "5%",
  },
  contentContainer: {
    marginTop: "2%",
    marginLeft: "7%",
  },
  subheader: {
    fontSize: 25,
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
