import {ActionTypes, initialState} from '../utils/constants.js';

export const setAuthorizationRequiredAction = (state = initialState.isAuthorizationRequired) => ({
  type: ActionTypes.SET_AUTHORIZATION_REQUIRED,
  payload: state,
});
