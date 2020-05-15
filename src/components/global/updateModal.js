import React,{useState} from "react";
import { Text,View, TouchableOpacity,StyleSheet, Dimensions,Modal } from "react-native";
import Updated from "../../../assets/images/svg/updated.svg";

const UpdateModal= (props) => {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  
  return (
    <Modal visible={modalVisible}>
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.successtext}>Updated Successfully!</Text>
        <TouchableOpacity onPress={()=>setModalVisible(false)}>
          <Updated  />
        </TouchableOpacity>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius:30,
    width: "100%",
    height: 250,
    position:'absolute',
    marginTop:'50%'
   
  },
  centerContainer: {
    marginTop: "20%",
    alignItems: "center",
   
  },

  successtext: {
    fontFamily: "Montserrat_Bold",
    fontSize: 25,
    color: "#333333",
  },
});
export default UpdateModal;