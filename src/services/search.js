import backendAxios from './backendAxios'
import React,{useState,useEffect} from "react";

export const useResult=()=>{
  const [results,setResults]=useState([]);
  
  const getResult = async (name) => {
    const response = await backendAxios.get(`Class/AllClassesByName/${name}`)
    .then(response => {
     
     // return response.data.payload
     setResults(response.data.payload)
     console.log(response.data.payload)
    })
    .catch(error => {
      return error;
    });
  return response;
  }
  useEffect((name) => {
    getResult(name) 
  }, []);
  return [getResult,results]
}