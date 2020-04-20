import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

const LoadingModal = ({ modalVisible }) => {
  if (!modalVisible) return null;

  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.loader}>
        <ActivityIndicator
          color="#2A1C5A"
          size={Math.min(
            Dimensions.get("window").width * 0.2,
            Dimensions.get("window").height * 0.1
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
