import React from "react";
import { Text,View, TouchableOpacity,StyleSheet, Dimensions } from "react-native";
//import Updated from "../../../assets/images/svg/update.svg";

const UpdateModal= (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.successtext}>Updated Successfully!</Text>
        <TouchableOpacity onPress={()=>setModalVisibility(true)}>
          {/* <Updated height={50} width={50}/> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius:30,
    width: "100%",
    height: 200,
    display:'flex',
    flex:1,
    position:'absolute',
    marginTop:'50%'
   
  },
  centerContainer: {
    marginTop: "25%",
    alignItems: "center",
   
  },

  successtext: {
    fontFamily: "Montserrat_Bold",
    fontSize: 25,
    color: "#333333",
  },
});
export default UpdateModal;