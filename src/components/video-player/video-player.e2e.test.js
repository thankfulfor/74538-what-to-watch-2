import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {VideoPlayer} from './video-player';

Enzyme.configure({adapter: new Adapter()});

const film = {
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
};

it(`Тест проверяет, что компонента есть два состояния: «воспроизведение» и «пауза».`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        src={film.previewVideoLink}
        poster={film.previewImage}
        isPlaying={false}
      />
  );

  expect(videoPlayer.state(`isPlaying`)).toEqual(false);

  videoPlayer.setState({isPlaying: true});

  expect(videoPlayer.state(`isPlaying`)).toEqual(true);
});
