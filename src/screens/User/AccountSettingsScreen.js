import React,{useEffect,useState} from "react";
import { Text, View,StyleSheet,Image,TextInput,Dimensions } from "react-native";
import MainButton from "../../components/global/MainButton";
import ScreenHeaderText from '../../components/global/ScreenHeaderText'
 import getProfileData from '../../services/profileData'
 //import PhotoUpload from 'react-native-photo-upload'
import RNPickerSelect from 'react-native-picker-select';
import UpdateModal from '../../components/global/updateModal'
import Icon from 'react-native-vector-icons/Ionicons';
import backendAxios from '../../services/backendAxios'
import DatePicker from 'react-native-datepicker'
import PhotoPicker from '../../components/global/PhotoPicker'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const AccountSettingsScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [dateofBirth, setDateofBirth] = useState('');
  const [profilePic,setProfilePic]=useState('')
  const [gender, setGender] = useState('');
  const [update,setUpdate] =useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const [profileData,getAccountData]=AccountData()
  const updateProfile =async () => 
  {  let response = await backendAxios.patch('Account', {
      fullName: fullName,
      mobile: phoneNumber,
      email: emailAddress,
      gender:gender,
      birthDate:dateofBirth,
      profilePicture:profilePic
  })
  .then((response) => {
         console.log(response);
  }) .catch((error) => {
    console.log(error)

  })

    setUpdate(true)
    console.log(fullName,phoneNumber,emailAddress,gender,dateofBirth,profilePic)
  }
  const [profileData,setProfileData]=useState([]) 
  
    useEffect(() => {
      getProfileData().then((result) => {
        setProfileData(result);
        });
    }, []);  
  return (

      <View style={styles.container}>
        <KeyboardAwareScrollView>
        {modalVisible==true? <UpdateModal isVisible={modalVisible}/>:console.log('No')}
     <View style={styles.centercontainer}>
     <ScreenHeaderText headerText={'Account Settings'}/>
    </View>
    <View style={styles.centercontainer}>
   <Image 
   source={{uri:profileData.profilePicture}}
   style={styles.profilePic}
   />
    </View>
    <View style={styles.centercontainer}>
   <Text style={styles.updateProfileText}></Text>
   </View>
   <PhotoPicker 
                    value={profilePic}
                    onChangeText={(text) => setProfilePic(text)}
                />
   <View >
    <TextInput 
    placeholder={profileData.fullName?profileData.fullName:'Full Name'}
    value={fullName}
    placeholderTextColor='#7C8695'
    style={styles.input}
    onChangeText={(text) => setFullName(text)}
    />
    
    <TextInput 
    placeholder={profileData.mobile}
    value={phoneNumber}
    placeholderTextColor='#7C8695'
    style={styles.input}
    onChangeText={(text) => setPhonenumber(text)}
    />
    <TextInput 
    value={emailAddress}
    placeholder={profileData.email}
    placeholderTextColor='#7C8695'
    style={styles.input}
    onChangeText={(text) => setEmailAddress(text)}
    />
    {/* <DatePicker 
    style={{width:'80%',marginLeft:'10%',borderBottomWidth:0,fontSize:16,
          fontFamily:'Montserrat_Medium',marginTop:'4%'}}
    mode='date'
    placeholder='Date of birth (Optional)'
    format="YYYY-MM-DD"
    minDate="1990-05-01"
    date={dateofBirth}
    onDateChange={(text) => setDateofBirth(text)}
    /> */}
    <TextInput 
    placeholder='Date of birth (Optional)'
    placeholderTextColor='#7C8695'
    value={dateofBirth}
    style={styles.input}
    type={Date}
    confirmBtnText={'Date'}
    onChangeText={(text) => setDateofBirth(text)}
    />
    <View style={styles.input}>
            <RNPickerSelect
             placeholder={{ label: 'Gender' , value: gender }}
             placeholderTextColor={{color:'#7C8695'}}
             value={gender}
             style={{fontSize:16,
              fontFamily:'Montserrat_Medium',}}
             onValueChange={(text) => setGender(text)}
             useNativeAndroidPickerStyle={false}
             items={[
              { label: 'Female', value: 'Female' },
              { label: 'Male', value: 'Male' },
             
          ]}
           Icon={() => { return <Icon name="ios-arrow-down" size={20} color="#132641" /> }}
          />
    </View>
    </View>
    <View style={{marginTop:'8%'}}>
   
    <MainButton
        onPress={() => {updateProfile() 
          setModalVisible(true)
        }}
        firstGradient="#1D55C5"
        secondGradient="#E93354"
      >
        
        Update profile
      </MainButton>
      </View>
      </KeyboardAwareScrollView>
    </View>

  );
};
const styles = StyleSheet.create({
    centercontainer:{
       
        alignSelf:'center',
        
    },
    container:
    {
        display:'flex',
        flex:1,
        backgroundColor:'#FFFFFF'
    },

    profilePic: {
        resizeMode: 'center',
        width:  100,
        height: 100,
        borderRadius: 200/ 2,
       
        //alignItems: "center",
        marginTop:'4%',
      },
      updateProfileText:{
          color:'#D8365D',
          fontFamily:'Montserrat_SemiBold',
          fontSize:16,
         marginTop:'2%'
      },
      input:{
          fontSize:16,
          fontFamily:'Montserrat_Medium',
          borderBottomColor:'#DDDDDD',
          borderBottomWidth:1,
          paddingVertical:10,
          marginLeft:'10%',
          marginRight:'10%',
          marginTop:Dimensions.get("window").height > 800?'12%':'6%',

    }
})
export default AccountSettingsScreen;
