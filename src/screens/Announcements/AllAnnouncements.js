import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AnnouncementCard from "../../components/global/AnnouncementCard";
import getAnnouncements from "../../utils/Announcements";
import ScreenHeaderText from "../../components/global/ScreenHeaderText";
import LoadingModal from "../../components/global/LoadingModal";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton';

const AllAnouncmenets = ({ navigation }) => {
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnnouncements().then((result) => {
      setDataset(result);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScreenHeaderText headerText={"Announcements"}>
          Announcements
        </ScreenHeaderText>

      </View>


      <FlatList
        data={dataset}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AnnouncementCard
            onPress={() => {
              navigation.navigate("AnnouncementDetail",{id : item._id});
            }}
            dateTime={item.publishedDateTime}
            image={{ uri: item.imageLocation }}
            sentence={item.title}
          >

          </AnnouncementCard>
        )}
      />
      <LoadingModal modalVisible={loading} />
    </View>
  );
};
AllAnouncmenets.navigationOptions = (props) => {
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
   
    headertransparent:true,
  
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:'5%'
  },
  loader: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginRight: "18%",
    marginTop: "12%",
  },
});
export default AllAnouncmenets;
