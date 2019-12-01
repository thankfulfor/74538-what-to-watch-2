import {ActionTypes, initialState} from '../utils/constants.js';

const getFilmsByGenre = (genre, state = initialState.films) => {
  if (genre === `All genres`) {
    return state;
  } else {
    return state.filter((film) => {
      return film.genre === genre;
    });
  }
};

export const getFilmListByGenreAction = (genre, state = initialState.films) => {
  return ({
    type: ActionTypes.FILTER_FILMS_BY_GENRE,
    payload: getFilmsByGenre(genre, state),
  });
};
