import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';
import {ActionTypes} from '../../utils/constants.js';
import {Operation} from '../../operations/operation.js';

describe(`loadFavoriteFilms работает корректно`, () => {
  it(`loadFavoriteFilms корректно посылает запрос к API /favorites`, function () {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const favoriteFilmsLoader = Operation.loadFavoriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoriteFilmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.LOAD_FAVORITE_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});
