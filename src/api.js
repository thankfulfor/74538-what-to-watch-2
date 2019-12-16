import axios from 'axios';
import {history} from './history.js';

import {URL, ServerResponseStatus} from './utils/constants.js';
import {updateUserDataAction} from './actions/update-user-data.js';

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: URL.BASE_URL + URL.WTW_URL,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === ServerResponseStatus.UNAUTHORIZED || error.response.status === ServerResponseStatus.FORBIDDEN) {
      // Проверяем, что это не ошибка запроса статуса авторизации
      if (!((error.response.config.url === (URL.BASE_URL + URL.WTW_URL + URL.LOGIN_PAGE_URL)) && error.response.config.method === `get`)) {
        history.push(URL.LOGIN_PAGE_URL);
        dispatch(updateUserDataAction());
      }
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
