import React from 'react';
import renderer from 'react-test-renderer';
import {FilmList} from './film-list-1.jsx';
import {BrowserRouter} from 'react-router-dom';

const films = [{
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  genre: `drama`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
}];

it(`FilmList корректно рендерится после перезапуска`, () => {
  const tree = renderer
    .create(<BrowserRouter><FilmList films={films} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
