import {loadFilmAction} from '../actions/load-films.js';
import {loadPromoAction} from '../actions/load-promo.js';
import {setAuthorizationRequiredAction} from '../actions/set-authorization-required.js';
import {updateUserDataAction} from '../actions/update-user-data.js';
import {setLoggedInAction} from '../actions/set-logged-in.js';

export const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(loadFilmAction(response.data));
      });
  },
  loadPromo: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(loadPromoAction(response.data));
      });
  },
  authenticate: (email, password) => {
    return (dispatch, _getState, api) => {
      return api
        .post(`/login`, {email, password})
        .then((response) => {
          if (response.status === 200) {
            dispatch(setAuthorizationRequiredAction(false));
            dispatch(updateUserDataAction(response.data));
            dispatch(setLoggedInAction(true));
          }
        });
    };
  }
};
