import backendAxios from "../services/backendAxios";

export default getProfileData = async () => {
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