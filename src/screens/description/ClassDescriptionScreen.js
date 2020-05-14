import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import ClassDescription from "../../components/global/ClassDescription";
import ClassReservation from "../../components/global/ClassReservation";
import { getClassDetails, reserveClass, getClassType, getClassBranch } from "../../utils/ClassDescription";

const ClassDescriptionScreen = ({ navigation }) => {
  const [dataset, setDataset] = useState([]);
  const [reserve, setReserve] = useState("");
  const [type, setType] = useState("");
  const [branch, setBranch] = useState("");

  // console.log(navigation.state.params);

  useEffect(() => {
    // navigation.state.params.
    getClassDetails("5ebccaf7ad92da0025ee0ea4").then((result) => {
      setDataset(result);

      getClassType(result.type).then((result) => {
        setType(result);
      });

      getClassBranch(result.branch).then((result) => {
        setBranch(result);
      });

    })

  }, []);
  const onClickReserve = () => {
    reserveClass("5ebccaf7ad92da0025ee0ea4").then((result) => {
      setReserve("Reserved");
    })
  }
  return (
    <ImageBackground
      source={{ uri: dataset.imageURL }}
      style={styles.Background}
      imageStyle={{ opacity: 0.59 }}
    >
      {reserve != "" ? (
        <ClassReservation
          onPress={() => navigation.navigate("MainScreen")}
        />
      ) : (
          <ClassDescription
            name={dataset.name}
            type={type}
            description={dataset.description}
            place={branch}
            dateTime={dataset.date}
            numberOfLikes={dataset.numberOfLikes}
            onPress={() => onClickReserve()}
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
