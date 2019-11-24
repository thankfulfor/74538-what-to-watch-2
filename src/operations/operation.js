import {loadFilmAction} from '../actions/load-films.js';
import {loadPromoAction} from '../actions/load-promo.js';

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
};
