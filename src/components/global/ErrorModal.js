import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome5";
const ErrorModal = ({ modalVisible, closeModal, message }) => {
  if (!modalVisible) return null;
  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.icon}>
            <Icon size={20} color="#d00100" name="exclamation-triangle" />
            <Text style={styles.errorText}> ERROR </Text>
          </View>
          <Text style={styles.messageText}>
            {message ? message.replace(/, /g, "\n") : "There is some error"}
          </Text>
        </View>

        <View style={styles.modalFooter}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              closeModal();
            }}
          >
            <View>
              <Text style={styles.buttonText}>OK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
    minHeight: "20%",
    maxHeight: "25%",
    overflow: "hidden",
  },
  icon: {
    flexDirection: "row",
    marginTop: "4%",
  },

  modalFooter: {
    height: "55%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat_Medium",
  },
  modalBody: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: "65%",
    width: "100%",
    backgroundColor: "#d00100",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#b90000",
    marginTop: "13%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Montserrat_SemiBold",
    marginBottom: "13%",
  },
  errorText: {
    fontSize: 22,
    marginBottom: 18,
    fontFamily: "Montserrat_Medium",
    color: "#d00100",
  },
  messageText: {
    fontSize: 15,
    fontFamily: "Montserrat_Medium",
    marginTop: "4%",
  },
});
export default ErrorModal;
