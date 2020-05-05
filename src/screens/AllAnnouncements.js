import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AnnouncementCard from "../components/global/AnnouncementCard";

const AllAnouncmenets = ({ navigation }) => {
  const test = [
    {
      dateTime: "Sunday, 21/4",
      image: 'https://i.pinimg.com/564x/a2/40/18/a240184c013c988b33953b988356716b.jpg',
      sentence: "New core class available",
    },
    {
      dateTime: "Tuesday, 17/4",
      image: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
      sentence: "New yoga class is available.",
    },
  ];
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Announcements</Text>
      <FlatList
        data={test}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <AnnouncementCard dateTime={item.dateTime} image={{uri:item.image}} sentence={item.sentence}></AnnouncementCard>}
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
  header:{
      fontFamily:"Montserrat_Bold",
      fontSize:35,
      color:"#494EAD",
      marginRight: "14%",
      marginTop:"18%",
  }
});
export default AllAnouncmenets;
