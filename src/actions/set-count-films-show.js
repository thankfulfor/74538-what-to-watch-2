import {ActionType, initialState} from '../utils/constants.js';

export const setCountFilmsShowAction = (count = initialState.countFilmsShow) => ({
  type: ActionType.SET_COUNT_FILMS_SHOW,
  payload: count,
});
