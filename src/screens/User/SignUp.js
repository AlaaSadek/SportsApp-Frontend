import React, { useState } from "react";
import { View ,TouchableOpacity,Text,Image} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction, ClearSignUpStateAction } from '../../store/User/action'
import { SignUp } from '../../models/users/UserModel';
import logo from '../../../assets/images/logo.png';
import signUpStyle from "../../styles/SignUpStyle";
import authenticationstyle from '../../styles/AuthentcationStyle';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from "react-native-vector-icons/Ionicons";
import LoadingModal from '../../components/global/LoadingModal';
import SuccessModel from '../../components/global/ScessModel';
import ErrorModel from '../../components/global/ErrorModal';
import Input from "../../components/global/Input";
import MainButton from '../../components/global/MainButton';

const SignUpScreen=({navigation})=>{

  const disptach = useDispatch();

  const requestState = useSelector(
    (store) => {
      return {
        pending: store.SignUpReducer.sendingSignUpRequest,
        error: store.SignUpReducer.errorSignUpRequest,
        success: store.SignUpReducer.successSignUpRequest,
        errorMessage: store.SignUpReducer.errorMessage
      }
    })
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [fulnameError, setfullnameError] = useState('');
    const [emailaddressError, setemailaddressError] = useState('');
    const [phonenumberError, setphonenumberError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [confirmpasswordError, setconfirmpasswordError] = useState('');

    const [isPassword, setisPassword] = useState(true);
    const [isConfirmPassword, setisConfirmPassword] = useState(true);

    const changePwdType = () => {
      setisPassword(!isPassword);
    };
    const changeConfirmPassword=()=>{
      setisConfirmPassword(!isConfirmPassword)
    }

    const [success, setSuccess] = useState('');

    const validate = () => {
        let error = true;
        if (fullName == "") {
            setfullnameError("Please Enter Your Full Name ")
          error = false;
        }
        else {
            setfullnameError("")
        }
        if (emailAddress == '') {
            setemailaddressError("Please Enter Your Email")
            error = false
          }
          else {
            const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (valid.test(emailAddress) === true) {
                setemailaddressError("")
            }
            else {
              setemailaddressError("Invalid Email")
              error = false
            }
          }
        if (phoneNumber == "") {
            setphonenumberError("Please Enter Your Phone Number ")
        }
        else {
          var numbers = /^[0-9\b]+$/;
          if (numbers.test(phoneNumber) === true) {
            {
                if (phoneNumber.length < 6 || phoneNumber.length > 15) {
                    setphonenumberError("Phone number must be between 6-15 digits")
                      error = false;
                }
                else  setphonenumberError("")
            }
         
          }
          else {
            setphonenumberError("Can't Enter Letters")
            error = false
          }
        }
        if (password == '') {
          setpasswordError("Please Enter Your Password")
          error = false
        }
        else {
          if (password.length < 8) {
            setpasswordError("Password Must Be 8 Characters Or More")
            error = false
          }
          else setpasswordError("")
        }
        if (confirmPassword == '') {
          setconfirmpasswordError("Please Confirm Your Password")
          error = false
        }
        else {
          if (password != confirmPassword) {
            setconfirmpasswordError("Confirm Password Doesn't Match")
            error = false
          }
          else
          setconfirmpasswordError("")
        }
        return error;
      }
    
      const onSubmit = () => {

        if (validate()) {
         disptach(signUpAction(new SignUp(fullName,emailAddress, phoneNumber, password)))
         setSuccess("True")
         console.log(success)
        }
        else {
          console.log("Failed") 
          setSuccess("False")}
      }
return(
  <KeyboardAwareScrollView>
        <SuccessModel modalVisible={requestState.success} closeModal={() => { disptach(ClearSignUpStateAction())}} message="You are successfully Registered"/>
        <ErrorModel modalVisible={requestState.error} closeModal={() => { disptach(ClearSignUpStateAction()) }} message={requestState.errorMessage } />
        {/* <LoadingModal modalVisible={requestState.pending} /> */}
        <View style={authenticationstyle.whiteBackground}>
          <View style={authenticationstyle.shadowBackground}>
            <View style={authenticationstyle.logoContainer}>
             <Image source={logo} style={authenticationstyle.logo} />
             </View>
            <View style={authenticationstyle.signInUpContainer}>
                <TouchableOpacity>
                    <Text style={authenticationstyle.inActiveText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={authenticationstyle.activeButton}>
                    <Text style={authenticationstyle.activeText}>Signup</Text>
                </TouchableOpacity>
            </View>
            <View style={signUpStyle.activeTextLine}></View>
            </View>
            
        <Input
          placeholder="Full Name"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          errorText={fulnameError}
          container={signUpStyle.container}
        />
        <Input
          placeholder="Email Address"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          value={emailAddress}
          onChangeText={(text) => setEmailAddress(text)}
          errorText={emailaddressError}
          container={signUpStyle.container}
        />
        <Input
          placeholder="Phone Number"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          value={phoneNumber}
          onChangeText={(text) => setPhonenumber(text)}
          errorText={phonenumberError}
          container={signUpStyle.container}
        />
        <View style={authenticationstyle.passwordField}>
        <Input
          placeholder="Password"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={isPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
          errorText={passwordError}
          container={signUpStyle.container}
          style={signUpStyle.input}
        />
           <View style={authenticationstyle.passIcon}>
              <IonIcon name="md-eye" style={authenticationstyle.eyeIcon}
                onPress={() => changePwdType()}
              />
            </View>
          </View>
          <View style={authenticationstyle.passwordField}>
      
        <Input
          placeholder="Confirm Password"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={isConfirmPassword}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          errorText={confirmpasswordError}
          container={signUpStyle.container}
        />
      
           <View style={authenticationstyle.passIcon}>
              <IonIcon name="md-eye" style={authenticationstyle.eyeIcon}
                onPress={() => changeConfirmPassword()}
              />
            </View>
          </View>
        <MainButton
            firstGradient="#1D55C5"
            secondGradient="#E93354"
            style={signUpStyle.signUpButton}
            onPress={() => onSubmit()}
          >
            REGISTER
          </MainButton>
        <View style={signUpStyle.termsconditionContainer}>
        <Text style={signUpStyle.youaggreedText}>By signing up, you agree with our </Text>
        <TouchableOpacity>
            <Text  style={signUpStyle.termsconditionText}>Terms & Conditions</Text>
        </TouchableOpacity>
        </View>
        <View style={signUpStyle.line}></View>

        <View style={authenticationstyle.iconContainer}>
       <TouchableOpacity>
        <Icon name="facebook" style={authenticationstyle.facebookIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="twitter" style={authenticationstyle.twitterIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <IonIcon name="ios-mail" style={authenticationstyle.envelopIcon}/>
        </TouchableOpacity>
        </View>
    </View>
     </KeyboardAwareScrollView>
)

}
export default SignUpScreen;