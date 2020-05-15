import backendAxios from "../services/backendAxios";

export const getClassDetails = async (classID) => {
  let res = await backendAxios
    .get(`Class/${classID}`)
    .then((res) => {
      return res.data.payload;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const reserveClass = async (classID) => {
  let res = await backendAxios
    .post("Class/ReserveClass", {
      id: classID,
    })
    .then((res) => {

      return res.data.message;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const getClassType = async (typeID) => {
  let res = await backendAxios
    .get(`Class/Type/${typeID}`)
    .then((res) => {
      return res.data.payload.name;
    })
    .catch((error) => {
      return error;
    });
  return res;
};
export const getClassBranch = async (branchID) => {
  let res = await backendAxios
    .get(`Branch/${branchID}`)
    .then((res) => {
      return res.data.payload.place;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

