import {loadFilmAction} from '../actions/load-films.js';
import {loadPromoAction} from '../actions/load-promo.js';
import {updateUserDataAction} from '../actions/update-user-data.js';
import {loadFavoriteFilmAction} from '../actions/load-favorite-films.js';
import {loadIsFavoriteAction} from '../actions/load-is-favorite-action.js';
import {getReviewsAction} from '../actions/get-reviews-action.js';

import {URLS} from '../utils/constants.js';
import {setFavoriteStatusAction} from '../actions/set-favorite-status.js';

export const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(URLS.FILMS_URL)
      .then((response) => {
        dispatch(loadFilmAction(response.data));
      }).catch((error) => {
        throw new Error(`${error} при загрузке фильмов`);
      });
  },
  loadPromo: () => (dispatch, _getState, api) => {
    return api.get(URLS.PROMO_URL)
      .then((response) => {
        dispatch(loadPromoAction(response.data));
        dispatch(loadIsFavoriteAction(response.data.is_favorite));
      }).catch((error) => {
        throw new Error(`${error} при загрузке фильма`);
      });
  },
  authenticate: (email, password) => {
    return (dispatch, _getState, api) => {
      return api
        .post(URLS.LOGIN_PAGE_URL, {email, password})
        .then((response) => {
          if (response.status === 200) {
            dispatch(updateUserDataAction(response.data));
            Operation.loadFavoriteFilms();
          }
        }).catch((error) => {
          throw new Error(`${error} при авторизации`);
        });
    };
  },
  loadFavoriteFilms: () => (dispatch, _getState, api) => {
    return api.get(URLS.FAVORITE_URL)
      .then((response) => {
        if (response.status === 200) {
          dispatch(loadFavoriteFilmAction(response.data));
        }
      }).catch((error) => {
        throw new Error(`${error} при загрузке избранных фильмов`);
      });
  },
  setFavorite: (id, status) => {
    return (dispatch, getState, api) => {
      return api
        .post(`${URLS.FAVORITE_URL}/${id}/${status}`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(setFavoriteStatusAction(response.data, getState().films));
            dispatch(loadIsFavoriteAction(response.data.is_favorite));
          }
        }).catch((error) => {
          throw new Error(`${error} при добавлении фильма в избранные`);
        });
    };
  },
  getLogin: () => (dispatch, _getState, api) => {
    return api.get(URLS.LOGIN_PAGE_URL)
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateUserDataAction(response.data));
          Operation.loadFavoriteFilms();
        }
      }).catch(() => {
        dispatch(updateUserDataAction());
      });
  },
  postComments: (id, rating, text) => {
    return (dispatch, _getState, api) => {
      return api
        .post(`${URLS.POST_REVIEW}/${id}`, {rating, text})
        .then((response) => {
          if (response.status === 200) {
            dispatch(getReviewsAction(response.data));
          }
        }).catch((error) => {
          throw new Error(`${error} при загрузке отзывов`);
        });
    };
  },
  getReviews: (id) => (dispatch, _getState, api) => {
    return api.get(`${URLS.POST_REVIEW}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getReviewsAction(response.data));
        }
      }).catch((error) => {
        throw new Error(`${error} при загрузке отзывов`);
      });
  },
};
