import {ActionTypes, initialState} from '../utils/constants.js';

export const loadIsFavoriteAction = (state = initialState.isFavorite) => ({
  type: ActionTypes.LOAD_IS_FAVORITE,
  payload: state,
});
