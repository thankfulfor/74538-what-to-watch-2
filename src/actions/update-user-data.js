import {ActionTypes, initialState} from '../utils/constants.js';

export const updateUserDataAction = (state = initialState.userData) => ({
  type: ActionTypes.UPDATE_USER_DATA,
  payload: state,
});
