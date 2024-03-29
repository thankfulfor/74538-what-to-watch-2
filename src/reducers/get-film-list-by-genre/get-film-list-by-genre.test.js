import {getFilmListByGenreAction} from '../../actions/get-film-list-by-genre.js';
import {ActionType} from '../../utils/constants.js';

const films = [{
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  genre: `Drama`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
}];

describe(`getFilmListByGenreAction работает корректно`, () => {
  it(`getFilmListByGenreAction фильтрует массив фильмов по переданному жанру`, () => {
    expect(getFilmListByGenreAction(`Drama`, films))
      .toEqual({
        type: ActionType.FILTER_FILMS_BY_GENRE,
        payload: [films[0]]
      });
  });
});
