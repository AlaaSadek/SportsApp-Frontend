import backendAxios from '../services/backendAxios'
import {useState,useEffect} from "react";

export default getProfileData = async () => {
  let res = await backendAxios
    .get("Account/getProfileData")
    .then((res) => {
      console.log(res.data.payload.returnedAccount)
      return res.data.payload.returnedAccount;
    })
    .catch((error) => {
      console.log(error)
      return error;
    });
  return res;
};
