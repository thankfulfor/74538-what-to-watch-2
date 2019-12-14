import {ActionTypes, initialState} from '../utils/constants.js';

export const setCountFilmsShowAction = (count = initialState.countFilmsShow) => ({
  type: ActionTypes.SET_COUNT_FILMS_SHOW,
  payload: count,
});
