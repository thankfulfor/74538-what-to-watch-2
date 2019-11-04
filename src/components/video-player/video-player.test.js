import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from './video-player.jsx';

const film = {
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
};

it(`VideoPlayer корректно рендерится после перезапуска`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          src={film.previewVideoLink}
          poster={film.previewImage}
          isPlaying={false}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
