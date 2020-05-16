import React from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import ReserveIcon from "../../../assets/images/svg/reserveIcon.svg";

const ClassReservation = (props) => {
  let containerStyle = styles.container;
  let contentContainer = styles.contentContainer;
  if (props.description && props.description.length < 100) {
    containerStyle = styles.containerSM;
    contentContainer = styles.contentContainerSM;
  }

  return (
    <View style={containerStyle}>
      <View style={contentContainer}>
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
  containerSM: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height:
    Dimensions.get("window").height < 520
    ? Dimensions.get("window").height * 0.5
    : Dimensions.get("window").height * 0.35,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  contentContainer: {
    marginTop: "25%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  contentContainerSM: {
    marginTop: "15%",
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
