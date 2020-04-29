import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Input = (props) => {
  let errorMSG = props.errorText;
  let myStyle = styles.input;
  if (props.style) myStyle = { ...myStyle, ...props.style };
  if (!props.errorText == "") myStyle = { ...myStyle, ...styles.errorBorder };
  return (
    <View style={styles.main}>
      {errorMSG != "" ?  <Text style={styles.errorTXT}>{errorMSG}</Text> : <Text style={styles.errorTXT}> </Text>}
      <View style={styles.container}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          {...props}
          style={myStyle}
        />
        {errorMSG != "" ? (
          <Icon name="exclamation-circle" style={styles.icon}></Icon>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  errorBorder: {
    borderColor: "#b30000",
  },
  container: {
    flexDirection: "row",
  },
  input: {
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
  errorTXT: {
    color: "#b30000",
    fontFamily: "Montserrat_Medium",
    fontSize: 12,
    marginLeft: "13%",
    marginBottom: "0%",
  },
  
  icon: {
    color: "#b30000",
    fontSize: 20,
    marginLeft: "2%",
    alignSelf: "center",
  },
  main:{
    marginTop: '3%',
  }
});

export default Input;