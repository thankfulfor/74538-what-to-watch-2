export const CountConstant = {
  COUNT_FILMS_SHOW: 8,
  COUNT_MORE_LIKE_THIS: 4,
  COUNT_FILMS_SHOW_MORE: 20,
  COUNT_GENRES: 10,
};

export const Rating = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
  AWESOME: 10,
};

export const ServerResponseStatus = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403
};

export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
  SET_COUNT_FILMS_SHOW: `SET_COUNT_FILMS_SHOW`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_AUTHORIZATION_REQUIRED: `SET_AUTHORIZATION_REQUIRED`,
  UPDATE_USER_DATA: `UPDATE_USER_DATA`,
  SET_LOGGED_IN: `SET_LOGGED_IN`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`,
  LOAD_IS_FAVORITE: `LOAD_IS_FAVORITE`,
  LOAD_FILM: `LOAD_IS_FAVORITE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

export const URL = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/`,
  WTW_URL: `wtw`,
  MAIN_PAGE_URL: `/`,
  LOGIN_PAGE_URL: `/login`,
  FAVORITE_URL: `favorite`,
  MY_LIST_URL: `/mylist`,
  FILMS_URL: `/films`,
  PROMO_URL: `/films/promo`,
  FILM_PAGE_URL: `/films/:id`,
  ADD_REVIEW_PAGE_URL: `/films/:id/review`,
  REVIEW: `/comments`,
};

export const initialState = {
  genre: `All genres`,
  countFilmsShow: CountConstant.COUNT_FILMS_SHOW,
  countGenres: CountConstant.COUNT_GENRES,
  films: [],
  promoFilm: {},
  genres: [],
  userData: {},
  favoriteFilms: [],
  filmId: 0,
  reviews: []
};

export const tabNames = [`Overview`, `Details`, `Reviews`];
