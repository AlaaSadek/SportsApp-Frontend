import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const MainButton = (props) => {
  let buttonStyle = { ...styles.buttonStyle, ...props.style };
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={[props.firstGradient, props.secondGradient]}
        style={buttonStyle}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: "4%",
    paddingHorizontal: "20%",
    borderRadius: 5,
    width: "75%",
    marginLeft: "12%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat_Medium",
    textAlign: "center",
  },
});

export default MainButton;
