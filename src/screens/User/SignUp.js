import React, { useState } from "react";
import { View ,TextInput,TouchableOpacity,Text,Image} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction, ClearSignUpStateAction } from '../../store/User/action'
import { SignUp } from '../../models/users/UserModel';
import { LinearGradient } from "expo-linear-gradient";
import logo from '../../../assets/images/logo.png'
import signUpStyle from "../../styles/SignUpStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import LoadingModal from '../../components/global/LoadingModal';
import SuccessModel from '../../components/global/ScessModel';
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpScreen=()=>{

  const disptach = useDispatch();

  const requestState = useSelector(
    (state) => {
      return {
        pending: state.SignUpReducer.sendingSignUpRequest,
        error: state.SignUpReducer.errorSignUpRequest,
        success: state.SignUpReducer.successSignUpRequest,
        errorMessage: state.SignUpReducer.errorMessage
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


    const [success, setSuccess] = useState('');

    const validate = () => {
        let error = true;
        if (fullName == "") {
            setfullnameError("Please Enter Your Full Name ")
          error = false;
        }
        else {
          var letters = /^[A-Za-z]+$/;
          if (letters.test(fullName) === true) {
            setfullnameError("")
          }
          else {
            setfullnameError("Can't Enter Numbers")
            error = false
          }
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
                      error = true;
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
          //console.log("Success")
         // disptach(signUpAction(new SignUp(fullName,emailAddress, phoneNumber, password)))
         setSuccess("True")
         console.log(success)
        }
        else {
          console.log("Failed") 
        setSuccess("False")}
      }
return(
  // <KeyboardAwareScrollView>
        <View style={signUpStyle.whiteBackground}>
            {/* <LoadingModal modalVisible={requestState.pending} /> */}
            {success=='True'?<SuccessModel />:null}
          <View style={signUpStyle.shadowBackground}>
            <View style={signUpStyle.logoContainer}>
             <Image source={logo} style={signUpStyle.logo} />
             </View>
            <View style={signUpStyle.signInUpContainer}>
                <TouchableOpacity>
                    <Text style={signUpStyle.inActiveText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={signUpStyle.activeButton}>
                    <Text style={signUpStyle.activeText}>Signup</Text>
                </TouchableOpacity>
            </View>
            <View style={signUpStyle.activeTextLine}></View>
            </View>
            <Text style={signUpStyle.errorText}>{fulnameError}</Text>
            <View style={signUpStyle.errorContainer}> 
        <TextInput
          placeholder="Full Name"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          style={[signUpStyle.input,!fulnameError==''?signUpStyle.error:null]}
          //style={signUpStyle.input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        >
        </TextInput>
        {fulnameError!=''? <Icon name='exclamation-circle' style={signUpStyle.exclamationmartIcon}></Icon>:null}
        </View>
        <Text style={signUpStyle.errorText}>{emailaddressError}</Text>
        <View style={signUpStyle.errorContainer}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          style={[signUpStyle.input,!emailaddressError==''?signUpStyle.error:null]}
          value={emailAddress}
          onChangeText={(text) => setEmailAddress(text)}
        >
        </TextInput>
        {emailaddressError!=''? <Icon name='exclamation-circle' style={signUpStyle.exclamationmartIcon}></Icon>:null}   
        </View>
        <Text style={signUpStyle.errorText}>{phonenumberError}</Text>
        <View style={signUpStyle.errorContainer}>
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          style={[signUpStyle.input,!phonenumberError==''?signUpStyle.error:null]}
          value={phoneNumber}
          onChangeText={(text) => setPhonenumber(text)}
        >
        </TextInput>
        {phonenumberError!=''? <Icon name='exclamation-circle' style={signUpStyle.exclamationmartIcon}></Icon>:null}
        </View>
        <Text style={signUpStyle.errorText}>{passwordError}</Text>
        <View style={signUpStyle.errorContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          style={[signUpStyle.input,!passwordError==''?signUpStyle.error:null]}
          value={password}
          onChangeText={(text) => setPassword(text)}
        >
        </TextInput>
        {passwordError!=''? <Icon name='exclamation-circle' style={signUpStyle.exclamationmartIcon}></Icon>:null}
       
        </View>
        <Text style={signUpStyle.errorText}>{confirmpasswordError}</Text>
        <View style={signUpStyle.errorContainer}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor='#8E9092'
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          style={[signUpStyle.input,!confirmpasswordError==''?signUpStyle.error:null]}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        >
        </TextInput>
        {confirmpasswordError!=''? <Icon name='exclamation-circle' style={signUpStyle.exclamationmartIcon}></Icon>:null}
        </View>   
        <TouchableOpacity onPress={()=>onSubmit()}
         >
            <LinearGradient   colors={['#484EAC','#EF3241']} 
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={signUpStyle.signUpButton}
            >
            <Text style={signUpStyle.signUpText}>REGISTER</Text>
            </LinearGradient>
        </TouchableOpacity>
        <View style={signUpStyle.termsconditionContainer}>
        <Text style={signUpStyle.youaggreedText}>By signing up, you agree with our </Text>
        <TouchableOpacity>
            <Text  style={signUpStyle.termsconditionText}>Terms & Conditions</Text>
        </TouchableOpacity>
        </View>
        <View style={signUpStyle.line}></View>
        <View style={signUpStyle.iconContainer}>
         
       <TouchableOpacity>
      
        <Icon name="facebook" style={signUpStyle.facebookIcon}/>
        
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="twitter" style={signUpStyle.twitterIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="envelope" style={signUpStyle.envelopIcon}/>
        </TouchableOpacity>
        </View>
    </View>
    // </KeyboardAwareScrollView>
)

}
export default SignUpScreen;
