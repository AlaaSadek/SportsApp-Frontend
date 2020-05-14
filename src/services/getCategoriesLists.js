import backendAxios from './backendAxios'
import {useState,useEffect} from "react";

export const ClassTypes =() =>
{ 
    const [allClasses, setAllClasses] = useState([]);
    const getAllClassTypes = async()=>{
    const response = await backendAxios.get("Class/ClassTypes")
    .then(response => {
      //return response.data.payload
      setAllClasses(response.data.payload)
    })
    .catch(error => {
      return error;
    });
  return response;
  }
  useEffect(() => {
    getAllClassTypes() 
  }, []);
  return [allClasses,getAllClassTypes]
};
//Levels
export const ClassLevels=() =>
{ 
    const [allLevel, setAllLevels] = useState([]);
    const getAllClassLevels = async()=>{
    const response = await backendAxios.get("Class/ClassLevels")
    .then(response => {
      //return response.data.payload
      setAllLevels(response.data.payload)
    })
    .catch(error => {
      return error;
    });
  return response;
  }
  useEffect(() => {
    getAllClassLevels() 
  }, []);
  return [allLevel,getAllClassLevels]
};

export const AllBranches=() =>
{ 
  const [allBranches, setAllBranches] = useState([]);
    const getAllBranches = async()=>{
    const response = await backendAxios.get("Branch/AllBranches")
    .then(response => {
      //return response.data.payload
      setAllBranches(response.data.payload.branches)
    })
    .catch(error => {
      return error;
    });
  return response;
  }
  useEffect(() => {
    getAllBranches() 
  }, []);
  return [getAllBranches,allBranches]
};


