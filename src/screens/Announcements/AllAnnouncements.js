import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AnnouncementCard from "../../components/global/AnnouncementCard";
import getAnnouncements from "../../utils/Announcements";
import ScreenHeaderText from "../../components/global/ScreenHeaderText"

const AllAnouncmenets = ({ navigation }) => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    getAnnouncements().then((result) => {
      setDataset(result);
    });
  }, []);

  return (
      
    <View style={styles.container}>
      <View style={styles.header}>
    <ScreenHeaderText headerText={'Announcements'} >
    Announcements
    </ScreenHeaderText>
    </View>

      <FlatList
        data={dataset}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AnnouncementCard
            dateTime={item.publishedDateTime}
            image={{ uri: item.imageLocation }}
            sentence={item.title}
          ></AnnouncementCard>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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
