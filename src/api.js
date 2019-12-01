import axios from 'axios';
import {URLS} from './utils/constants.js';

export const configureAPI = () => {
  const api = axios.create({
    baseURL: URLS.BASE_URL + `wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === 403) {
      history.push(`/login`);
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
