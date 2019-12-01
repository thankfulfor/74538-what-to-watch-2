import {ActionTypes} from '../utils/constants.js';

export const loadFilmAction = (films) => ({
  type: ActionTypes.LOAD_FILMS,
  payload: films,
});
