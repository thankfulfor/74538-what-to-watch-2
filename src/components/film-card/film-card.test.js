import React from 'react';
import renderer from 'react-test-renderer';
import {FilmCard} from './film-card';

const film = {
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  genre: `drama`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
};

it(`FilmCard корректно рендерится после перезапуска`, () => {
  const mouseMoveHandler = jest.fn();
  const tree = renderer
    .create(<FilmCard
      key={`${film.name}`}
      film={film}
      isPlaying={false}
      onMouseEnter={mouseMoveHandler}
      onMouseLeave={mouseMoveHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
