import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import ClassDescription from "../../components/global/ClassDescription";
import ClassReservation from "../../components/global/ClassReservation";
import getClassDetails from "../../utils/ClassDescription";

const ClassDescriptionScreen = ({ navigation }) => {
  const [dataset, setDataset] = useState([]);
  const [reserve, setReserve] = useState("");

  useEffect(() => {
    getClassDetails("5ebc184208afa9275cd953b0").then((result) => {
      setDataset(result);
    });
  }, []);
  const click =()=>{
    console.log(reserve)
    setReserve("lol xd")
  }
  return (
    <ImageBackground
      source={{ uri: dataset.imageURL }}
      style={styles.Background}
      imageStyle={{ opacity: 0.59 }}
    >
      {reserve != "" ? (
        <ClassReservation/>
      ) : (
        <ClassDescription
          name={dataset.name}
          type={dataset.type}
          description={dataset.description}
          place={dataset.place}
          dateTime={dataset.date}
          numberOfLikes={dataset.numberOfLikes}
          onPress={ ()=> console.log('aaaaa')}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Background: {
    resizeMode: "stretch",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
  },
});
export default ClassDescriptionScreen;
