import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import ClassDescription from "../../components/global/ClassDescription";
import ClassReservation from "../../components/global/ClassReservation";
import LoadingModal from "../../components/global/LoadingModal";
import {
  getClassDetails,
  reserveClass,
  getClassType,
  getClassBranch,
} from "../../utils/ClassDescription";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton';


const ClassDescriptionScreen = ({ navigation }) => {
  const [dataset, setDataset] = useState([]);
  const [reserve, setReserve] = useState("");
  const [type, setType] = useState("");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(true);
  const classID = navigation.getParam('id')
  useEffect(() => {
    // navigation.state.params.
    getClassDetails(classID).then((result) => {
      setDataset(result);

      getClassType(result.type).then((result) => {
        setType(result);
      });

      getClassBranch(result.branch).then((result) => {
        setBranch(result);
        setLoading(false);
      });
    });
  }, []);
  const onClickReserve = () => {
    reserveClass(classID).then((result) => {
      setReserve("Reserved");
    });
  };

  return (
    <ImageBackground
      source={{ uri: dataset.imageURL }}
      style={styles.Background}
      imageStyle={{ opacity: 0.59 }}
    >
      <LoadingModal modalVisible={loading} />

      {reserve != "" ? (
        <ClassReservation
          description={dataset.description}
          onPress={() => navigation.navigate("MainScreen")}
        />
      ) : (
          <ClassDescription
            type={type}
            classItem={dataset}
            name={dataset.name}
            description={dataset.description}
            numberOfLikes={dataset.numberOfLikes}
            dateTime={dataset.date}
            place={branch}
            onPress={() => onClickReserve()}
          />
        )}
    </ImageBackground>
  );
};

ClassDescriptionScreen.navigationOptions = (props) => {
  return {
    title: '',
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item style={styles.backIcon} title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
        </HeaderButtons>
      )
    },

    headertransparent: true,

  }
}
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
