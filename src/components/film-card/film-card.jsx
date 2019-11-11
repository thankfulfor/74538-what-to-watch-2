import * as React from 'react';
import PropTypes from 'prop-types';
import {VideoPlayer} from '../video-player/video-player.jsx';

export const FilmCard = (props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave} = props;

  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        {isPlaying
          ? (
            <VideoPlayer
              src={film.previewVideoLink}
              poster={film.previewImage}
              isPlaying={isPlaying}
            />)
          : (<img src={film.previewImage} alt={film.name} />)
        }
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};
