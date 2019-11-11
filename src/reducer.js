import {films} from './mock/films.js';

export const initialState = {
  genre: `All genres`,
  filmCards: films,
};

const getFilmsByGenre = (genre) => {
  return genre === `All genres` ? initialState.filmCards : initialState.filmCards.filter((film) => {
    return film.genre === genre;
  });
};

export const ActionCreator = {
  changeFilterByGenre: (genre) => ({
    type: `CHANGE_FILTER_BY_GENRE`,
    payload: genre,
  }),
  getFilmListByGenre: (genre) => ({
    type: `FILTER_FILMS_BY_GENRE`,
    payload: getFilmsByGenre(genre),
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_FILTER_BY_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `FILTER_FILMS_BY_GENRE`:
      return Object.assign({}, state, {
        filmCards: action.payload
      });
  }
  return state;
};
