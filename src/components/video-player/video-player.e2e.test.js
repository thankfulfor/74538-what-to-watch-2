import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {VideoPlayer} from './video-player';

Enzyme.configure({adapter: new Adapter()});

const film = {
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
};

it(`Тест проверяет, что у компонента есть два состояния: «воспроизведение» и «пауза».`, () => {
  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

  const videoPlayer = mount(
      <VideoPlayer
        src={film.previewVideoLink}
        poster={film.previewImage}
        isPlaying={false}
      />
  );

  expect(videoPlayer.props().isPlaying).toEqual(false);

  videoPlayer.props().isPlaying = true;

  expect(videoPlayer.props().isPlaying).toEqual(true);
});
