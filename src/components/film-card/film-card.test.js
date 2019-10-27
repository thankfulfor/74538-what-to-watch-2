import React from 'react';
import renderer from 'react-test-renderer';
import {FilmCard} from './film-card';

const film = {
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
};

it(`FilmCard корректно рендерится после перезапуска`, () => {
  const mouseEnterHandler = function () {};
  const tree = renderer
    .create(
        <FilmCard
          onHover={mouseEnterHandler}
          key={`${film.name}`}
          film={film}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
