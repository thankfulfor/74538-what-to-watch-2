import {ActionTypes, initialState} from '../utils/constants.js';

export const setLoggedInAction = (state = initialState.isLoggedIn) => ({
  type: ActionTypes.SET_LOGGED_IN,
  payload: state,
});
