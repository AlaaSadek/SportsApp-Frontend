import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import MainButton from "../components/global/MainButton";
import Input from "../components/global/Input";
import logo from "../../assets/images/logo.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import IonIcon from "react-native-vector-icons/Ionicons";

const SignInScreen = ({ navigation }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [emailaddressError, setemailaddressError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const validate = () => {
    let error = false;

    if (emailAddress == "") {
      setemailaddressError("Please Enter Your Email");
      error = true;
    } else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(emailAddress) === true) {
        setemailaddressError("");
      } else {
        setemailaddressError("Invalid Email");
        error = true;
      }
    }

    if (password == "") {
      setpasswordError("Please Enter Your Password");
      error = true;
    } else {
      setpasswordError("");
    }
    return error;
  };

  const onSubmit = () => {
    if (!validate()) {
      alert("Success");
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image source={logo} style={styles.img} />
        </View>

        <View style={styles.signInUpContainer}>
          <TouchableOpacity>
            <Text style={styles.loginTXT}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.signupTXT}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line}></View>
      </View>
      <View>
        <View>
          <Input
            errorText={emailaddressError}
            placeholder="Email Address"
            placeholderTextColor="#8E9092"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setEmailAddress(text)}
          />

          <Input
            errorText={passwordError}
            placeholder="Password"
            placeholderTextColor="#8E9092"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          {/* <IonIcon styles={styles.passIcon} size={24} color="#CCCCCC" name="md-eye" /> */}

          <MainButton
            firstGradient="#1D55C5"
            secondGradient="#E93354"
            style={styles.loginBTN}
            onPress={() => onSubmit()}
          >
            LOGIN
          </MainButton>
        </View>
        <View>
          <Text style={styles.forgotpass}>Forgot Password?</Text>
        </View>

        <View style={styles.smLine}></View>

        <View style={styles.icons}>
          <Icon size={24} color="#1D55C5" name="facebook-f" />

          <Icon size={24} color="#7D418F" name="twitter" />
          <IonIcon size={26} color="#CB3765" name="ios-mail" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBTN: {
    marginTop: "8%",
  },
  img: {
    resizeMode: "center",
    width: Dimensions.get("window").height > 600 ? 300 : 200,
    height: Dimensions.get("window").height > 600 ? 215 : 150,
  },
  logo: {
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {
    shadowColor: "rgba(31, 84, 195, 0.149)",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
    backgroundColor: "white",
    marginBottom: "6%",
  },

  signInUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "63%",
    alignSelf: "center",
  },
  loginTXT: {
    fontSize: 16,
    fontFamily: "Montserrat_Bold",
  },
  signupTXT: {
    fontSize: 16,
    fontFamily: "Montserrat_Medium",
  },

  line: {
    borderWidth: 2,
    borderColor: "#1F54C3",
    width: "50%",
    marginTop: "2%",
  },
  forgotpass: {
    fontFamily: "Montserrat_Medium",
    fontSize: 14,
    marginTop: "6%",
    marginLeft: "13%",
    color: "#1F54C3",
  },

  smLine: {
    borderWidth: 0.5,
    borderColor: "#D1D1D1",
    width: "75%",
    marginTop: Dimensions.get("window").height > 600 ? "15%" : "4%",
    marginLeft: "13%",
    marginBottom: Dimensions.get("window").height > 600 ? "5%" : "3%",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "25%",
    alignSelf: "center",
  },
  passwordField: {
    flexDirection: "row",
  },
  passIcon: {
    position: "absolute",
    top: 0,
    right: 30,
    bottom: 0,
    left: 0,
  },
});

export default SignInScreen;
