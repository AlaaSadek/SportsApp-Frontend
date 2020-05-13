import backendAxios from './backendAxios'


 export const Search = async (id) => {
    const response = await backendAxios.get(`Class/${id}`)
    .then(response => {
      console.log(response.data.payload)
      return response.data.payload
    })
    .catch(error => {
      return error;
    });
  return response;
};