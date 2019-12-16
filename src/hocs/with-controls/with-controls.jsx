import React, {PureComponent} from 'react';

const withControlButtons = (Component) => {
  class WithControlButtons extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        isFullScreen: false,
        isPlaying: false,
        duration: 0,
        currentTime: 0,
      };

      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
      this.handlePlayPauseButtonClick = this.handlePlayPauseButtonClick.bind(this);
      this.handleSpaceBarPress = this.handleSpaceBarPress.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`keydown`, this.handleSpaceBarPress, false);
      this.videoRef.current.ontimeupdate = () => (
        this.setState({currentTime: this.videoRef.current.currentTime})
      );

      this.videoRef.current.onloadedmetadata = () => (
        this.setState({
          duration: this.videoRef.current.duration,
          currentTime: this.videoRef.current.currentTime,
        })
      );
    }

    componentDidUpdate() {
      return this.state.isPlaying ? this.videoRef.current.play() : this.videoRef.current.pause();
    }

    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.handleSpaceBarPress, false);
      this.videoRef.current.onloadedmetadata = null;
      this.videoRef.current.ontimeupdate = null;
    }

    handleFullScreenButtonClick() {
      this.setState({isFullScreen: !this.state.isFullScreen});
    }

    handlePlayPauseButtonClick() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handleSpaceBarPress(evt) {
      if (evt.keyCode === 32) {
        this.setState({isPlaying: !this.state.isPlaying});
      }
    }


    render() {
      return (
        <Component
          {...this.props}
          videoRef={this.videoRef}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
          isPlaying={this.state.isPlaying}
          isFullScreen={this.state.isFullScreen}
          onPlayPauseButtonClick={this.handlePlayPauseButtonClick}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
          onSpaceBarPress={this.handleSpaceBarPress}
        />
      );
    }
  }

  WithControlButtons.propTypes = {};

  return WithControlButtons;
};

export default withControlButtons;
