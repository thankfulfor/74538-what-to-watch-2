import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';
import {ActionTypes} from '../../utils/constants.js';
import {Operation} from '../../operations/operation.js';


describe(`loadFilms работает корректно`, () => {
  it(`loadFilms корректно посылает запрос к API /films`, function () {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});
