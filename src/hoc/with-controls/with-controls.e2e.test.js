import React from 'react';
import Enzyme, {mount} from 'enzyme';
import withControls from './with-controls';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';

Enzyme.configure({adapter: new Adapter()});

describe(`HOC withControls рендерится корректно`, () => {
  let wrapper;

  const MockVideoComponent = (props) => {
    const {videoRef, onPlayPauseButtonClick, onFullScreenButtonClick} = props;
    return (
      <div>
        <video ref={videoRef} />
        <button className="player__play" onClick={onPlayPauseButtonClick}>
          Play
        </button>
        <button className="player__full-screen" onClick={onFullScreenButtonClick}>
          Fullscreen
        </button>
      </div>
    );
  };

  MockVideoComponent.propTypes = {
    onPlayPauseButtonClick: PropTypes.func.isRequired,
    onFullScreenButtonClick: PropTypes.func.isRequired,
    videoRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  };

  const MockComponentWrapped = withControls(MockVideoComponent);

  beforeEach(() => {
    wrapper = mount(<MockComponentWrapped />);

    jest
      .spyOn(window.HTMLMediaElement.prototype, `play`)
      .mockImplementation(() => {});

    jest
      .spyOn(window.HTMLMediaElement.prototype, `pause`)
      .mockImplementation(() => {});
  });

  it(`intial state set correctly`, () => {
    expect(wrapper.state(`isPlaying`)).toBe(false);
    expect(wrapper.state(`isFullScreen`)).toBe(false);
  });

  it(`onPlayPauseButtonClick переключает isPlaying`, () => {
    const button = wrapper.find(`.player__play`);
    button.simulate(`click`);

    expect(wrapper.state(`isPlaying`)).toBe(true);
  });

  it(`onSpaceBarPress переключает isPlaying`, () => {
    wrapper.instance().spaceBarPressHandler({keyCode: 32});

    expect(wrapper.state(`isPlaying`)).toBe(true);
  });

  it(`onFullScreenButtonClick переключает isFullScreen`, () => {
    const button = wrapper.find(`.player__full-screen`);
    button.simulate(`click`);

    expect(wrapper.state(`isFullScreen`)).toBe(true);
  });
});
