import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  let myStyle = styles.input;
  if (props.style) myStyle = { ...myStyle, ...props.style };
  return (
    <View>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        {...props}
        style={myStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    fontSize: 14,
    fontFamily: "Montserrat_Medium",
    color: "#1D2226",
    paddingHorizontal: "5%",
    width: "72.8%",
    marginLeft: "12%",
    height: 50, //mehtag ytzbt
    backgroundColor: "white",
    shadowColor: "rgba(31, 84, 195, 0.149)",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
});

export default Input;
