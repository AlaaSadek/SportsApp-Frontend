import backendAxios from "../services/backendAxios";

export default getAnnouncementDetail = async (id) => {
  let res = await backendAxios
    .get(`Announcement/${id}`)
    .then((res) => {
      console.log(res.data.payload)
      return res.data.payload;
    })
    .catch((error) => {
      return error;
    });
  return res;
};