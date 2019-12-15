import {ActionType} from '../utils/constants.js';

export const loadFilmAction = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});
