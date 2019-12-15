import {ActionType} from '../utils/constants.js';

export const changeFilterByGenreAction = (genre) => ({
  type: ActionType.CHANGE_FILTER_BY_GENRE,
  payload: genre,
});
