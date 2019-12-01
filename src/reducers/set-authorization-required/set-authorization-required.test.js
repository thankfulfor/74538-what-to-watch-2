import {setAuthorizationRequired} from './set-authorization-required.js';
import {ActionTypes} from '../../utils/constants.js';

const isAuthorizationRequiredMock = false;
const isAuthorizationRequiredExpected = false;

describe(`setAuthorizationRequired работает корректно`, () => {
  it(`setAuthorizationRequired устанавливает переданный isAuthorizationRequired`, () => {
    expect(setAuthorizationRequired(isAuthorizationRequiredMock, {
      type: ActionTypes.SET_AUTHORIZATION_REQUIRED,
      payload: isAuthorizationRequiredMock
    }))
      .toEqual(isAuthorizationRequiredExpected);
  });
});

