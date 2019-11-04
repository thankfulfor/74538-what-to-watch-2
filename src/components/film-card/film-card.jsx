import * as React from 'react';
import PropTypes from 'prop-types';
import {VideoPlayer} from '../video-player/video-player.jsx';

const PREVIEW_DELAY = 1000;

export class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {film, onHover} = this.props;

    const mouseOverHandler = () => {
      onHover(film);

      this.delayShowPreview = setInterval(() => {
        this.setState({
          isPlaying: true
        });
      }, PREVIEW_DELAY);
    };

    const mouseLeaveHandler = () => {
      this.setState({
        isPlaying: false
      });
      clearInterval(this.delayShowPreview);
    };

    return (
      <article
        onMouseEnter={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          {this.state.isPlaying
            ? (
              <VideoPlayer
                src={film.previewVideoLink}
                poster={film.previewImage}
                isPlaying={this.state.isPlaying}
              />)
            : (<img src={film.previewImage} alt={film.name} />)
          }
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  onHover: PropTypes.func.isRequired
};
