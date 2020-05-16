import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import MainButton from "../../components/global/MainButton";
import ScreenHeaderText from "../../components/global/ScreenHeaderText";
import { getProfileData, updateProfileData } from "../../utils/ProfileData";
import RNPickerSelect from "react-native-picker-select";
import UpdateModal from "../../components/global/UpdateModal";
import LoadingModal from "../../components/global/LoadingModal";
import Icon from "react-native-vector-icons/Ionicons";
import DatePicker from "react-native-datepicker";
import PhotoPicker from "../../components/global/PhotoPicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/global/HeaderButton";
const AccountSettingsScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [gender, setGender] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const updateProfile = () => {
    setLoading(true);
    updateProfileData(
      fullName,
      phoneNumber,
      emailAddress,
      gender,
      dateofBirth,
      profilePic
    ).then((result) => {
      setLoading(false);
      setModalVisible(true);
    });
  };

  useEffect(() => {
    getProfileData().then((result) => {
      setProfileData(result);
    });
  }, []);
  console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <LoadingModal modalVisible={loading} />
        <UpdateModal modalVisible={modalVisible} />
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <ScreenHeaderText headerText={"Account Settings"} />
          </View>
          <View style={styles.centercontainer}>
            <Image
              source={{
                uri: profilePic.uri
                  ? profilePic.uri
                  : profileData.profilePicture,
              }}
              style={styles.profilePic}
            />
          </View>
          <View style={styles.centercontainer}>
            <Text style={styles.updateProfileText}></Text>
          </View>
          <PhotoPicker value={profilePic} setValue={setProfilePic} />
          <View>
            <TextInput
              placeholder={
                profileData.fullName ? profileData.fullName : "Full Name"
              }
              value={fullName}
              placeholderTextColor="#7C8695"
              style={styles.input}
              onChangeText={(text) => setFullName(text)}
            />

            <TextInput
              placeholder={profileData.mobile}
              value={phoneNumber}
              placeholderTextColor="#7C8695"
              style={styles.input}
              onChangeText={(text) => setPhonenumber(text)}
            />
            <TextInput
              value={emailAddress}
              placeholder={profileData.email}
              placeholderTextColor="#7C8695"
              style={styles.input}
              onChangeText={(text) => setEmailAddress(text)}
            />
            <DatePicker
              confirmBtnText={"Done"}
              cancelBtnText={"Cancel"}
              style={{
                width: "81.3%",
                marginLeft: "10%",
                marginTop: Dimensions.get("window").height > 800 ? "8%" : "6%",
              }}
              customStyles={dateTimePickerStyles}
              iconComponent={
                <Icon name="ios-calendar" color="#494EAD" size={30} />
              }
              mode="date"
              placeholder={
                profileData.birthDate
                  ? profileData.birthDate
                  : "Date of birth (Optional)"
              }
              format="YYYY-MM-DD"
              minDate="1990-05-01"
              date={dateofBirth}
              onDateChange={(date) => {
                setDateofBirth(date);
              }}
            />

            <View style={styles.input}>
              <RNPickerSelect
                placeholder={
                  profileData.gender
                    ? {
                        label: profileData.gender,
                        value: profileData.gender,
                        color: "red",
                      }
                    : { label: "Gender", value: "Gender" }
                }
                value={gender}
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    fontSize: 16,
                    fontFamily: "Montserrat_Medium",
                    color: "#7A8494",
                  },
                }}
                onValueChange={(value) => setGender(value)}
                useNativeAndroidPickerStyle={false}
                items={[
                  { label: "Female", value: "Female" },
                  { label: "Male", value: "Male" },
                ]}
                Icon={() => {
                  return (
                    <Icon name="ios-arrow-down" size={25} color="#494EAD" />
                  );
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: "9%" }}>
            <MainButton
              onPress={() => {
                updateProfile();
              }}
              firstGradient="#1D55C5"
              secondGradient="#E93354"
            >
              Update profile
            </MainButton>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
AccountSettingsScreen.navigationOptions = (props) => {
  return {
    title: "",
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            style={styles.backIcon}
            title="back"
            iconName="arrow-back"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </HeaderButtons>
      );
    },

    headertransparent: true,
  };
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
  },
  header: {
    marginLeft: "10%",
    marginTop: "4%",
  },
  centercontainer: {
    alignSelf: "center",
  },
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  profilePic: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    marginTop: "4%",
  },
  updateProfileText: {
    color: "#D8365D",
    fontFamily: "Montserrat_SemiBold",
    fontSize: 16,
    marginTop: "2%",
  },
  input: {
    fontSize: 16,
    fontFamily: "Montserrat_Medium",
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: Dimensions.get("window").height > 800 ? "8%" : "6%",
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: "black",
    fontFamily: "Montserrat_Medium",
  },
  inputAndroid: {
    fontSize: 16,
    color: "black",
    fontFamily: "Montserrat_Medium",
  },
});
const dateTimePickerStyles = StyleSheet.create({
  dateInput: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0.8,
    borderBottomColor: "#DDDDDD",
    alignItems: "flex-start",
  },
  placeholderText: {
    fontSize: 16,
    color: "#7A8494",
    fontFamily: "Montserrat_Medium",
  },
  dateText: {
    color: "black",
    fontFamily: "Montserrat_Medium",
    fontSize: 16,
  },
});
export default AccountSettingsScreen;
