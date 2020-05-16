import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import Updated from "../../../assets/images/svg/updated.svg";
const UpdateModal = ({ modalVisible }) => {
  if (!modalVisible) return null;
  const [visible, setVisible] = useState(modalVisible);
  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.successtext}>Updated Successfully!</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Updated />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "40%",
    backgroundColor:'white',
    borderRadius:40,
    width: '100%',

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
