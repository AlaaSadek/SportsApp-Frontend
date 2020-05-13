import backendAxios from './backendAxios'

export const getAllClassTypes = async () =>
{
    const response = await backendAxios.get("Class/ClassTypes")
    .then(response => {
      return response.data.payload
    })
    .catch(error => {
      return error;
    });
  return response;
};

export const getAllClassLevels = async () => {
    const response = await backendAxios .get("Class/ClassLevels")
    .then(response => {
      return response.data.payload
    })
    .catch(error => {
      return error;
    });
  return response;
};

export const getAllBranches = async () => {
    const response = await backendAxios .get("Branch/AllBranches")
    .then(response => {
      return response.data.payload
    })
    .catch(error => {
      return error;
    });
  return response;
};