import React from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import ReserveIcon from "../../../assets/images/svg/reserveIcon.svg";

const ClassReservation = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Reserved Successfully!</Text>
        <TouchableOpacity onPress={props.onPress}>
          <ReserveIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height:
      Dimensions.get("window").height > 740
        ? Dimensions.get("window").height * 0.4
        : Dimensions.get("window").height * 0.45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  contentContainer: {
    marginTop: "25%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  text: {
    fontFamily: "Montserrat_Bold",
    fontSize: 25,
    color: "black",
  },
});
export default ClassReservation;
