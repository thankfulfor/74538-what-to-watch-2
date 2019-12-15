import {ActionType, initialState} from '../utils/constants.js';

export const updateUserDataAction = (state = initialState.userData) => ({
  type: ActionType.UPDATE_USER_DATA,
  payload: state,
});
