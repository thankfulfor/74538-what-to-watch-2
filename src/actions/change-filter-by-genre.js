import {ActionTypes} from '../utils/constants.js';

export const changeFilterByGenreAction = (genre) => ({
  type: ActionTypes.CHANGE_FILTER_BY_GENRE,
  payload: genre,
});
