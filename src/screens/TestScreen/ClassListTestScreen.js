import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CancelableClassList from "../../components/Class/ClassList/CancelableClassList";
import DefaultClassList from "../../components/Class/ClassList/DefaultClassList";
import RateableClassList from "../../components/Class/ClassList/RateableClassList";
import BackendAxios from '../../services/backendAxios'

const ClassListTestScreen = ({ navigation }) => {
  const [classes, setClasses] = useState([])
  const [reservedClasses, setReservedClasses] = useState([])
  const [historyClasses, setHistoryClasses] = useState([])
  const refresh = async () => {
    await BackendAxios.get('/class/allclasses')
      .then(res => { setClasses(res.data.payload) })
    await BackendAxios.get('/class/reservedclasses')
      .then(res => { setReservedClasses(res.data.payload) })

  }
  useEffect(
    () => {

      refresh();
    }, []
  )
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>With header :</Text>
        <DefaultClassList refresh={refresh} displayDetails={false} classes={classes} header="Popular Classes" />
      </View>
      <View style={{ width: '100%', borderWidth: 3, marginVertical: 5 }}></View>
      <View style={{ flex: 1 }}>
        <Text>Without header :</Text>
        <CancelableClassList refresh={refresh} classes={reservedClasses} />
      </View>
      <View style={{ width: '100%', borderWidth: 3, marginVertical: 5 }}></View>
      <View style={{ flex: 1 }}>
        <Text>Without header :</Text>
        <RateableClassList refresh={refresh} classes={classes} />
      </View>
    </View>
  );
};

export default ClassListTestScreen;
