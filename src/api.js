import axios from 'axios';
import {history} from './history.js';

import {URLS} from './utils/constants.js';

export const configureAPI = () => {
  const api = axios.create({
    baseURL: URLS.BASE_URL + URLS.WTW_URL,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const loginPageUrl = URLS.LOGIN_PAGE_URL;

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      history.push(loginPageUrl);
    }
    return error;
  };

  // api.interceptors.response.use(onSuccess, onFail);

  return api;
};
