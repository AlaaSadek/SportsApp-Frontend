import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  signInAction,
  clearSignInStateAction,
} from "../store/User/SignIn/actions";
import { SignIn } from "../models/users/UserModel";
import { useDispatch, useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MainButton from "../components/global/MainButton";
import Input from "../components/global/Input";
import logo from "../../assets/images/logo.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import IonIcon from "react-native-vector-icons/Ionicons";
import ErrorModal from "../components/global/ErrorModal";
import LoadingModal from "../components/global/LoadingModal";
import { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";

const SignInScreen = ({ navigation }) => {
  const disptach = useDispatch();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const [isPassword, setisPassword] = useState(true);
  const changePwdType = () => {
    setisPassword(!isPassword);
  };
  const requestState = useSelector((state) => {
    return {
      success: state.signInReducer.success,
      error: state.signInReducer.error,
      pending: state.signInReducer.signInStarted,
      errorMessage: state.signInReducer.errorMessage,
    };
  });

  useEffect(() => {
    if (requestState.success) {
      disptach(clearSignInStateAction());
      navigation.navigate("ApplicationNav");
    }
  });

  const validate = () => {
    let error = false;

    if (email == "") {
      setemailError("Please Enter Your Email");
      error = true;
    } else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(email) === true) {
        setemailError("");
      } else {
        setemailError("Invalid Email");
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
      disptach(signInAction(new SignIn(email, password)));
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={"always"}
      style={{ flex: 1 }}
      showsVerticalScrollIndicat
      or={false}
    >
      <ErrorModal
        modalVisible={requestState.error}
        closeModal={() => {
          disptach(clearSignInStateAction());
        }}
        message={
          requestState.errorMessage
            ? requestState.errorMessage
            : "Wrong Email or Password"
        }
      />
      <LoadingModal modalVisible={requestState.pending} />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.img} />
        </View>

        <View style={styles.signInUpContainer}>
          <TouchableOpacity >
            <Text style={styles.loginTXT}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
            <Text style={styles.signupTXT}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line}></View>
      </View>
      <View>
        <View>
          <Input
            errorText={emailError}
            placeholder="Email Address"
            placeholderTextColor="#8E9092"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setemail(text)}
          />
          <View style={styles.passwordField}>
            <View style={{ zIndex: 0 }}>
              <Input
                errorText={passwordError}
                placeholder="Password"
                placeholderTextColor="#8E9092"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={isPassword}
              />
            </View>

            <View style={styles.passIcon}>
              <IonIcon
                size={24}
                onPress={() => changePwdType()}
                color="#CCCCCC"
                name="md-eye"
              />
            </View>
            <View style={styles.passwordLength}>
              <BarPasswordStrengthDisplay
                password={password}
                width={Dimensions.get("window").width * 0.7}
              />
            </View>
          </View>

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
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  loginBTN: {
    marginTop: "7%",
  },
  img: {
    resizeMode: "center",
    width: Dimensions.get("window").height > 600 ? 300 : 200,
    height: Dimensions.get("window").height > 600 ? 215 : 150,
  },
  logoContainer: {
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
    flexDirection: "column",
  },
  passIcon: {
    zIndex: 1,
    position: "absolute",
    marginTop: Dimensions.get("window").height > 600 ? "9.6%" : "11.1%",
    marginLeft: "75%",
  },
  passwordLength: {
    width: "70%",
    marginTop: "2%",
    marginLeft: "11.5%",
  },
});

export default SignInScreen;
