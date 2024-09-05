import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tracks';

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
};

export const uploadTrack = async (formData) => {
  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      ...authHeader(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getUserTracks = async () => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: authHeader(),
  });
  return response.data;
};