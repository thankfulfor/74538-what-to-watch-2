import axios from 'axios';

export const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  return api;
};
