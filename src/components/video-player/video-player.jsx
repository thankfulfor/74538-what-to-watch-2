import React from 'react';
import PropTypes from 'prop-types';

export class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.muted = true;
  }

  componentDidMount() {
    const videoElement = this.videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      videoElement.play();
      this.muted = true;
    }
  }

  componentDidUpdate() {
    const videoElement = this.videoRef.current;
    const {isPlaying} = this.props;

    return isPlaying ? videoElement.play() : videoElement.pause();
  }

  render() {
    const {src, poster} = this.props;

    return (
      <video
        ref={this.videoRef}
        src={src}
        poster={poster}
        style={{width: `100%`, height: `100%`}}
        muted={this.muted}
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
