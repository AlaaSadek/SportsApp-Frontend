import backendAxios from './backendAxios'
import React,{useState,useEffect} from "react";

export const useResult=()=>{
  const [results,setResults]=useState([]);
  const getResult = async (id) => {
    const response = await backendAxios.get(`Class/${id}`)
    .then(response => {
     
     // return response.data.payload
     setResults(response.data.payload)
    })
    .catch(error => {
      return error;
    });
  return response;
  }
  useEffect(() => {
    getResult() 
  }, []);
  return [getResult,results]
}