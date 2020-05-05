import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const AnnouncementCard = (props) => {
  return (
      <View style={styles.container}>
    <Text style={styles.dateTime}>{props.dateTime}</Text>
    <TouchableOpacity onPress={props.onPress}>
      <ImageBackground
        source={props.image} //error
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 20 }}
      >
        <Text style={styles.innerText}>
            {props.sentence}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  innerText: {
    color: "#D8365D",
    fontSize: 14,
    fontFamily:"Montserrat_Bold",
  },
  backgroundImage: {
    height: 172,
    width: 275,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    borderRadius: 20,
  },
  dateTime: {
    color: "#000000",
    fontSize: 14,
    fontFamily:"Montserrat_Medium",
    marginLeft:"4%",
    marginBottom:"3%"
  },
  container:{
      marginTop:"10%",
  }
});

export default AnnouncementCard;
