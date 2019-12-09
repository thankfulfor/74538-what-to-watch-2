export const CountConstants = {
  COUNT_FILMS_SHOW: 8,
  COUNT_MORE_LIKE_THIS: 4,
  COUNT_FILMS_SHOW_MORE: 20,
  COUNT_GENRES: 10,
};

export const ActionTypes = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
  INCREASE_COUNT_FILMS_SHOW: `INCREASE_COUNT_FILMS_SHOW`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_AUTHORIZATION_REQUIRED: `SET_AUTHORIZATION_REQUIRED`,
  UPDATE_USER_DATA: `UPDATE_USER_DATA`,
  SET_LOGGED_IN: `SET_LOGGED_IN`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`,
  LOAD_IS_FAVORITE: `LOAD_IS_FAVORITE`,
  LOAD_FILM: `LOAD_IS_FAVORITE`,
};

export const URLS = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/`,
  WTW_URL: `wtw`,
  MAIN_PAGE_URL: `/`,
  LOGIN_PAGE_URL: `/login`,
  FAVORITE_URL: `favorite`,
  MY_LIST_URL: `/mylist`,
  FILMS_URL: `/films`,
  PROMO_URL: `/films/promo`,
};

export const initialState = {
  genre: `All genres`,
  countFilmsShow: CountConstants.COUNT_FILMS_SHOW,
  countGenres: CountConstants.COUNT_GENRES,
  films: [],
  promoFilm: {},
  genres: [],
  userData: {},
  isLoggedIn: false,
  favoriteFilms: [],
  filmId: 0,
};

export const tabNames = [`Overview`, `Details`, `Reviews`];
