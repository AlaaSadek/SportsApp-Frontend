import React, { useState, useEffect } from "react";
import { View ,TextInput,TouchableOpacity,Text,Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import logo from '../../../assets/images/logo.png'
import signUpStyle from "../../styles/signUpStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
const SignUp=()=>{
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
          console.log("Success")
          //disptach(signUpAction(new SignUpUser(fullName,emailAddress, phoneNumber, password)))
        }
        else console.log("Failed")
      }
return(
    <View style={signUpStyle.whiteBackground}>
        <View style={signUpStyle.shadowBackground}>
           <Image source={logo} style={signUpStyle.logo}></Image>
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
        <Text style={signUpStyle.errorText}>{fulnameError}</Text>
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
        <Text style={signUpStyle.errorText}>{emailaddressError}</Text>
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
        <Text style={signUpStyle.errorText}>{phonenumberError}</Text>
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
        <Text style={signUpStyle.errorText}>{passwordError}</Text>
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
        <Text style={signUpStyle.errorText}>{confirmpasswordError}</Text>
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
)

}
export default SignUp;