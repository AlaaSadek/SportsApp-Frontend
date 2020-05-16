import backendAxios from '../services/backendAxios'


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
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  let res = await backendAxios
    .patch("Account", {
      fullName: fullName,
      mobile: phoneNumber,
      email: emailAddress,
      gender: gender,
      birthDate: dateofBirth,
      profilePicture: profilePic,

    }, config)
    .then((res) => {
      return res.data.messege;
    })
    .catch((error) => {
      return error;
    });
  return res;
};