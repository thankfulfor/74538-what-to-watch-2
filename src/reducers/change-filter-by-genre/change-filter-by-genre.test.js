import {changeFilterByGenreAction} from '../../actions/change-filter-by-genre.js';
import {ActionType} from '../../utils/constants.js';

describe(`ActionCreator работает корректно`, () => {
  it(`ActionCreator устанавливает переданный жанр`, () => {
    expect(changeFilterByGenreAction(`drama`))
      .toEqual({
        type: ActionType.CHANGE_FILTER_BY_GENRE,
        payload: `drama`
      });
  });
});
