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


export const getFilteredFilms = createSelector(
    [(state) => state.films, (state) => state.genre, (state) => state.countFilmsShow],
    (films, filter, counter) => {
      return filter === initialState.genre
        ? films.slice(0, counter)
        : films.filter(({genre}) => genre === filter)
          .slice(0, counter);
    }
);
