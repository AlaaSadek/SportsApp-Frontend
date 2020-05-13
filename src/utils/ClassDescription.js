import backendAxios from "../services/backendAxios";

export default getClassDetails = async (id) => {
  let res = await backendAxios
    .get(`Class/${id}`)
    .then((res) => {
      return res.data.payload;
    })
    .catch((error) => {
      return error;
    });
  return res;
};
