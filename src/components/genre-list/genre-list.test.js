import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {GenreList} from './genre-list.jsx';

const films = [{
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  genre: `drama`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
}];

const genres = [`All genres`];

Enzyme.configure({adapter: new Adapter()});

it(`Is genre catalog rendered`, () => {
  const clickHandler = jest.fn();

  const tree = shallow(
      <GenreList
        genres={genres}
        films={films}
        countFilmsShow={0}
        countGenres={0}
        filteredFilms={films}
        genre={genres[0]}
        onShowMoreButtonClick={clickHandler}
      />);

  expect(toJson(tree)).toMatchSnapshot();
});
