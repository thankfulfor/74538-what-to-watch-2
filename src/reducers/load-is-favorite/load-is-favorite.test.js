import {loadIsFavorite} from './load-is-favorite.js';
import {ActionTypes} from '../../utils/constants.js';

const loadIsFavoriteMock = false;
const loadIsFavoriteExpected = false;

describe(`loadIsFavorite работает корректно`, () => {
  it(`loadIsFavorite устанавливает переданный isFavorite`, () => {
    expect(loadIsFavorite(loadIsFavoriteMock, {
      type: ActionTypes.LOAD_IS_FAVORITE,
      payload: loadIsFavoriteMock
    }))
      .toEqual(loadIsFavoriteExpected);
  });
});

