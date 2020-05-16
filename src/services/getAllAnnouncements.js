import backendAxios from './backendAxios'

export const getAllAnnouncements = async () =>
{
    const response = await backendAxios.get("Announcement/AllAnnouncements")
    .then(response => {
      return response.data.payload.announcements
    })
    .catch(error => {
      return error;
    });
  return response;
};