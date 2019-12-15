import {ActionType, initialState} from '../utils/constants.js';

export const loadIsFavoriteAction = (state = initialState.isFavorite) => ({
  type: ActionType.LOAD_IS_FAVORITE,
  payload: state,
});
