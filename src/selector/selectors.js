import {createSelector} from 'reselect';
import {CountConstants, initialState} from '../utils/constants.js';

export const getFilms = (state) => state.films;

export const getGenres = createSelector(
    [(state) => state.films],
    (films) => {
      const genres = [initialState.genre];
      films.forEach((film) => (genres.push(film.genre)));
      return [...new Set(genres)].slice(0, CountConstants.COUNT_GENRES);
    }
);

export const getFilteredFilms = (films, genreFilter, filmsCount) => {
  return genreFilter === initialState.genre
    ? films.slice(0, filmsCount)
    : films.filter(({genre}) => genre === genreFilter)
      .slice(0, filmsCount);
};

export const getFilmByIdFromUrl = (state, id) => state.films.find((film) => film.id === +id);

export const getIsFavoriteById = (state, filmId) => state.films.find((film) => film.id === filmId).is_favorite;
