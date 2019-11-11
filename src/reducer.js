import {films} from './mock/films.js';

export const COUNT_FILMS_SHOW = 8;
export const COUNT_FILMS_SHOW_MORE = 20;
export const COUNT_GENRES = 10;

export const initialState = {
  genre: `All genres`,
  filmCards: films,
  countFilmsShow: COUNT_FILMS_SHOW,
  countGenres: COUNT_GENRES,
};

const getFilmsByGenre = (genre, state = initialState) => {
  return genre === `All genres` ? state.filmCards : state.filmCards.filter((film) => {
    return film.genre === genre;
  });
};

export const ActionCreator = {
  changeFilterByGenre: (genre) => ({
    type: `CHANGE_FILTER_BY_GENRE`,
    payload: genre,
  }),
  getFilmListByGenre: (genre, state = initialState) => ({
    type: `FILTER_FILMS_BY_GENRE`,
    payload: getFilmsByGenre(genre, state),
  }),
  increaseCountFilmsShow: () => ({
    type: `INCREASE_COUNT_FILMS_SHOW`,
    payload: COUNT_FILMS_SHOW_MORE,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_FILTER_BY_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload,
        countFilmsShow: COUNT_FILMS_SHOW
      });
    case `FILTER_FILMS_BY_GENRE`:
      return Object.assign({}, state, {
        filmCards: action.payload
      });
    case `INCREASE_COUNT_FILMS_SHOW`:
      return Object.assign({}, state, {
        countFilmsShow: state.countFilmsShow + action.payload
      });
  }
  return state;
};
