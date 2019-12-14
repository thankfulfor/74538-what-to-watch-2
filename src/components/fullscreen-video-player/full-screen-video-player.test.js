import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {FullScreenVideoPlayer} from './full-screen-video-player.jsx';

Enzyme.configure({adapter: new Adapter()});

const film = {
  previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  name: `We need to talk about Kevin`,
  genre: `drama`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/b/b3/Big_Buck_Bunny_Trailer_400p.ogv`
};

it(`FullScreenVideoPlayer рендерится корректно`, () => {
  const clickHandler = jest.fn();
  const mockVideoRef = React.createRef();

  const tree = shallow(
      <FullScreenVideoPlayer
        film={film}
        onExitButtonClick={clickHandler}
        onFullScreenButtonClick={clickHandler}
        isFullScreen={false}
        isPlaying={false}
        onPlayPauseButtonClick={clickHandler}
        duration={0}
        currentTime={0}
        videoRef={mockVideoRef}
      />);

  expect(toJson(tree)).toMatchSnapshot();
});
