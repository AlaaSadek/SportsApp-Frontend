import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

const LoadingModal = ({ modalVisible }) => {
  useEffect(() => {}, [modalVisible]);

  return (
    <Modal isVisible={modalVisible}>
        <View style={styles.loader}>
          <ActivityIndicator
            color="#2A1C5A"
            size={Math.min(
              Dimensions.get("window").width * 0.8,
              Dimensions.get("window").height * 0.8
            )}
          />
        </View>
    </Modal>
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
});
export default LoadingModal;
