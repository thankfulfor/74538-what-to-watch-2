import {changeFilterByGenreAction} from '../../actions/change-filter-by-genre.js';
import {ActionTypes} from '../../utils/constants.js';

describe(`ActionCreator работает корректно`, () => {
  it(`ActionCreator устанавливает переданный жанр`, () => {
    expect(changeFilterByGenreAction(`drama`))
      .toEqual({
        type: ActionTypes.CHANGE_FILTER_BY_GENRE,
        payload: `drama`
      });
  });
});
