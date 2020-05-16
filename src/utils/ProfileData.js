import backendAxios from "../services/backendAxios";

export const getProfileData = async () => {
  let res = await backendAxios
    .get("Account/getProfileData")
    .then((res) => {
      return res.data.payload.returnedAccount;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const updateProfileData = async (fullName, phoneNumber, emailAddress, gender, dateofBirth, profilePic) => {

  let formData = new FormData();
  formData.append('fullName', fullName)
  formData.append('mobile', phoneNumber)
  formData.append('email', emailAddress)
  formData.append('birthDate', dateofBirth)
  let photo = {
    uri: profilePic.uri,
    type: 'image/jpeg',
    name: profilePic.name,
  }
  if (profilePic.uri)
    formData.append('profilePicture', photo)
  formData.append('gender', gender)
  let res = await backendAxios
    .patch("Account",
      formData
    ,)
    .then((res) => {
      return res.data.messege;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};