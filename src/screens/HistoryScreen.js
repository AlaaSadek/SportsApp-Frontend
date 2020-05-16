import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { clearToken } from "../utils/LocalStorage";
import MainButton from "../components/global/MainButton";
import Announcements from "../components/Announcements/Announcements";
import ScreenHeaderText from '../components/global/ScreenHeaderText'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';
import RateableClassList from "../components/Class/ClassList/RateableClassList";
import BackendAxios from '../services/backendAxios'


// const HistoryScreen = ({ navigation }) => {
//   const [historyClasses, setHistoryClasses] = useState([])
//   const refresh = async () => {

//     await BackendAxios.get('/class/history')
//       .then(res => { setHistoryClasses(res.data.payload) })

//   }
//   useEffect(
//     () => {

//       refresh();
//     }, []
//   )
//   return (

//     <View style={{ margin: 70 }}>
//       <Text>History Screen</Text>
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 1 }}>
//           <Text>Without header :</Text>
//           <RateableClassList refresh={refresh} classes={historyClasses} />
//         </View>
//       </View>
//     </View>

//   );
// };
// HistoryScreen.navigationOptions = (props) => {
//   return {
//     title: '',
//     headerTransparent: true,
//     headerLeft: () => {
//       return (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item style={styles.backIcon} title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
//         </HeaderButtons>
//       )
//     },

//     headertransparent: true,

//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF'
//   }
// })

// export default HistoryScreen;

// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";
// import CancelableClassList from "../components/Class/ClassList/CancelableClassList";
// import DefaultClassList from "../components/Class/ClassList/DefaultClassList";
// import RateableClassList from "../components/Class/ClassList/RateableClassList";
// import BackendAxios from '../services/backendAxios'

const HistoryScreen = ({ navigation }) => {
  const [classes, setClasses] = useState([])
  const [reservedClasses, setReservedClasses] = useState([])
  const [historyClasses, setHistoryClasses] = useState([])
  const refresh = async () => {
    await BackendAxios.get('/class/allclasses')
      .then(res => { setClasses(res.data.payload) })
    await BackendAxios.get('/class/reservedclasses')
      .then(res => { setReservedClasses(res.data.payload) })
    await BackendAxios.get('/class/history')
      .then(res => { setHistoryClasses(res.data.payload) })

  }
  useEffect(
    () => {

      refresh();
    }, []
  )
  return (
    <View style={{margin:30,marginTop:60}}>
            <ScreenHeaderText headerText={"History"}></ScreenHeaderText>

        <RateableClassList refresh={refresh} classes={historyClasses} />
      </View>


  );
};

HistoryScreen.navigationOptions = (props) => {
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
      container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
      }
    })
export default HistoryScreen;
