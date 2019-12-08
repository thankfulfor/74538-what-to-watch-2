import * as React from 'react';
import PropTypes from 'prop-types';

import withControlButtons from '../../hoc/with-controls/with-controls.jsx';

const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

const getPercent = (duration, current) =>{
  return Math.round((current / duration) * 100);
};

const FullScreenVideoPlayer = (props) => {
  const {
    onExitButtonClick,
    onFullScreenButtonClick,
    isFullScreen,
    isPlaying,
    onPlayPauseButtonClick,
    duration,
    currentTime,
    videoRef,
    film
  } = props;

  const {video_link: videoLink, name} = film;

  return (
    <React.Fragment>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"
              />
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
            </g>
          </symbol>
          <symbol id="play" viewBox="0 0 14 21">
            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 10.5L-1.25694e-06 21L-3.39001e-07 -6.11959e-07L14 10.5Z" fill="#EEE5B5"/>
            </svg>
          </symbol>
        </svg>
      </div>

      <div className={`player ${isFullScreen ? `player-fullscreen` : ``}`}>
        <video
          src={videoLink}
          className={`player__video`}
          ref={videoRef}
        />

        <button onClick={onExitButtonClick} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={duration > 0 ? getPercent(duration, currentTime) : 0}
                max="100"
              />
              <div
                className="player__toggler"
                style={{
                  left: `${
                    duration > 0 ? getPercent(duration, currentTime) : 0
                  }%`
                }}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">{formatTime(duration - currentTime)}</div>
          </div>

          <div className="player__controls-row">
            <button onClick={onPlayPauseButtonClick} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={`${isPlaying ? `#pause` : `#play`}`} />
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{name}</div>

            <button onClick={onFullScreenButtonClick} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

FullScreenVideoPlayer.propTypes = {
  onExitButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayPauseButtonClick: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  videoRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  film: PropTypes.object.isRequired,
};

export {FullScreenVideoPlayer};
export default withControlButtons(FullScreenVideoPlayer);
