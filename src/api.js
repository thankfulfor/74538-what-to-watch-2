import axios from 'axios';
import {history} from './history.js';

import {URLS} from './utils/constants.js';
import {updateUserDataAction} from './actions/update-user-data.js';

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: URLS.BASE_URL + URLS.WTW_URL,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      // Проверяем, что это не ошибка запроса статуса авторизации
      if (!((error.response.config.url === (URLS.BASE_URL + URLS.WTW_URL + URLS.LOGIN_PAGE_URL)) && error.response.config.method === `get`)) {
        history.push(URLS.LOGIN_PAGE_URL);
        dispatch(updateUserDataAction());
      }
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
