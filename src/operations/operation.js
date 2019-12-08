import {loadFilmAction} from '../actions/load-films.js';
import {loadPromoAction} from '../actions/load-promo.js';
import {updateUserDataAction} from '../actions/update-user-data.js';
import {setLoggedInAction} from '../actions/set-logged-in.js';
import {loadFavoriteFilmAction} from '../actions/load-favorite-films.js';
import {loadIsFavoriteAction} from '../actions/load-is-favorite-action.js';

import {URLS} from '../utils/constants.js';
import {setFavoriteStatusAction} from '../actions/set-favorite-status.js';

export const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(URLS.FILMS_URL)
      .then((response) => {
        dispatch(loadFilmAction(response.data));
      });
  },
  loadPromo: () => (dispatch, _getState, api) => {
    return api.get(URLS.PROMO_URL)
      .then((response) => {
        dispatch(loadPromoAction(response.data));
        dispatch(loadIsFavoriteAction(response.data.is_favorite));
      });
  },
  authenticate: (email, password) => {
    return (dispatch, _getState, api) => {
      return api
        .post(URLS.LOGIN_PAGE_URL, {email, password})
        .then((response) => {
          if (response.status === 200) {
            dispatch(updateUserDataAction(response.data));
            dispatch(setLoggedInAction(true));
          }
        });
    };
  },
  loadFavoriteFilms: () => (dispatch, _getState, api) => {
    return api.get(URLS.FAVORITE_URL)
      .then((response) => {
        if (response.status === 200) {
          dispatch(loadFavoriteFilmAction(response.data));
        }
      });
  },
  setFavorite: (id, status) => {
    return (dispatch, _getState, api) => {
      return api
        .post(`${URLS.FAVORITE_URL}/${id}/${status}`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(setFavoriteStatusAction(response.data));
            dispatch(loadIsFavoriteAction(response.data.is_favorite));
          }
        });
    };
  },
  getLogin: () => (dispatch, _getState, api) => {
    return api.get(URLS.LOGIN_PAGE_URL)
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateUserDataAction(response.data));
          dispatch(setLoggedInAction(true));
        }
      });
  },
};
