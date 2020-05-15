import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import MainButton from "./MainButton";
import Heart from "../../../assets/images/svg/heart.svg";

const ClassDescription = (props) => {
  let containerStyle = styles.container;
  if (props.description && props.description.length < 100)
    containerStyle = styles.containerSM;

  let isodate = new Date(props.dateTime);
  let dateTime = "- " + isodate.toDateString();
  dateTime =
    dateTime.substring(0, dateTime.length - 5) +
    ", " +
    isodate.getHours() +
    ":" +
    isodate.getMinutes();
  return (
    <View style={containerStyle}>
      <View style={styles.TextContainer}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.type}>{props.type} - </Text>
            <Text style={styles.name}>{props.name}</Text>
          </View>

          <View style={styles.likesContainer}>
            <Heart height={20} width={20} />
            <Text style={styles.numberOfLikes}>{props.numberOfLikes}</Text>
          </View>
        </View>

        <Text style={styles.description}>{props.description}</Text>

        <View style={styles.placeTime}>
          <Text style={styles.placeTimeText}>{props.place} </Text>
          <Text style={styles.placeTimeText}>{dateTime}</Text>
        </View>

        <MainButton
          firstGradient="#1D55C5"
          secondGradient="#E93354"
          style={styles.chooseClassButton}
          onPress={props.onPress}
        >
          Reserve
        </MainButton>
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
      Dimensions.get("window").height < 667
        ? Dimensions.get("window").height * 0.5
        : Dimensions.get("window").height * 0.45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  containerSM: {
    position: "absolute",
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

  TextContainer: {
    position: "absolute",
    marginTop: "10%",
    marginLeft: "7%",
    width: "90%",
    marginRight: "4%",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  type: {
    color: "#333333",
    fontSize: 19,
    fontFamily: "Montserrat_Bold",
  },
  name: {
    color: "#333333",
    fontSize: 15,
    fontFamily: "Montserrat",
    marginTop: "2%",
  },
  description: {
    marginTop: "2%",
    color: "#AAAAAA",
    fontSize: Dimensions.get("window").height > 600 ? 14 : 12,
    fontFamily: "Montserrat",
    marginRight: "12%",
    marginBottom:
      Dimensions.get("window").height > 740
        ? Dimensions.get("window").height * 0.02
        : Dimensions.get("window").height * 0.03,
  },
  placeTime: {
    flex: 1,
    flexDirection: "row",
  },
  placeTimeText: {
    fontSize: Dimensions.get("window").height > 600 ? 12 : 10,
    color: "black",
    fontFamily: "Montserrat_SemiBold",
  },
  chooseClassButton: {
    marginTop:
      Dimensions.get("window").height > 740
        ? Dimensions.get("window").height * 0.06
        : Dimensions.get("screen").height * 0.04,
    paddingHorizontal: "6%",
  },

  title: {
    flexDirection: "row",
  },
  likesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: "5%",
  },

  numberOfLikes: {
    marginLeft: "3%",
    fontFamily: "Montserrat",
    color: "#9f6ad1",
  },
});
export default ClassDescription;
