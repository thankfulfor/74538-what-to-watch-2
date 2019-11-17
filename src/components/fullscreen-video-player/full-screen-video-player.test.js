import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {FullScreenVideoPlayer} from './full-screen-video-player.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Is play button rendered`, () => {
  const clickHandler = jest.fn();
  const mockVideoRef = React.createRef();

  const tree = shallow(
      <FullScreenVideoPlayer
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
