import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
} from "react-native";

import ClassDescription from "../../components/global/ClassDescription";
import getClassDetails from "../../utils/ClassDescription";

const ClassDescriptionScreen = ({ navigation }) => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    getClassDetails('5ebb3873d1f54e00253da9ac').then((result) => {
      setDataset(result);
    });
  }, []);
  return (
    
      <ImageBackground
        source={{ uri: dataset.imageURL }}
        style={styles.Background}
        imageStyle={{opacity:0.59 }}
      >
        <ClassDescription
          name={dataset.name}
          type={dataset.type}
          description={dataset.description}
          place={dataset.place}
          dateTime={dataset.date}
          numberOfLikes={dataset.numberOfLikes}
        ></ClassDescription>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Background: {
    resizeMode: "stretch",
    flex:1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
  },
});
export default ClassDescriptionScreen;
