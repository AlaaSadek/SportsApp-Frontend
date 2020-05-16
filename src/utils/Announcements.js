import backendAxios from "../services/backendAxios";

export default getAnnouncements = async () => {
  let res = await backendAxios
    .get("Announcement/AllAnnouncements")
    .then((res) => {
      return res.data.payload.announcements;
    })
    .catch((error) => {
      return error;
    });
  return res;
};
