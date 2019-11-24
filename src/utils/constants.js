export const CountConstants = {
  COUNT_FILMS_SHOW: 8,
  COUNT_FILMS_SHOW_MORE: 20,
  COUNT_GENRES: 10,
};

export const ActionTypes = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
  INCREASE_COUNT_FILMS_SHOW: `INCREASE_COUNT_FILMS_SHOW`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  RESET_COUNT_FILMS_SHOW: `RESET_COUNT_FILMS_SHOW`,
};

export const initialState = {
  genre: `All genres`,
  countFilmsShow: CountConstants.COUNT_FILMS_SHOW,
  countGenres: CountConstants.COUNT_GENRES,
  films: [],
  filteredFilms: [],
  promoFilm: {},
  genres: []
};
