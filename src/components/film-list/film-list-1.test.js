import React from 'react';
import renderer from 'react-test-renderer';
import {FilmList} from './film-list-1.jsx';

const films = [{
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
}];

it(`FilmList корректно рендерится после перезапуска`, () => {
  const tree = renderer
    .create(
        <FilmList
          films={films}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
