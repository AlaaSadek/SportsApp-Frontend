import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import getAnnouncementDetail from '../../utils/AnnouncementDetails'
import DetailsCard from "../../components/global/DetailsCard";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton';

const AnnouncementDetail = ({ navigation }) => {
  const [dataset, setDataset] = useState([]);
  useEffect(() => {
    getAnnouncementDetail(navigation.state.params.id).then((result) => {
      setDataset(result);
    });
  }, []);
  return (


    <ImageBackground
      source={{ uri: dataset.imageLocation }}
      style={styles.Background}
      imageStyle={{ opacity: 0.6 }}

    >
      <DetailsCard
        title={dataset.title}
        description={dataset.description}
        termsConditions={dataset.termsConditions}
        onPress={() => navigation.navigate("CategoriesFilterScreen")}
      ></DetailsCard>
    </ImageBackground>

  );
};
AnnouncementDetail.navigationOptions = (props) => {
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
    width: '100%',
    height: '100%',
    backgroundColor: "#2C2626",

  },

});
export default AnnouncementDetail;