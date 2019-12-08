import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {URLS} from '../../utils/constants.js';
import {VideoPlayer} from '../video-player/video-player.jsx';

export const FilmCard = (props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave} = props;

  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="small-movie-card catalog__movies-card"
    >
      <Link to={`${URLS.FILMS_URL}/${film.id}`}>
        <div className="small-movie-card__image">
          {isPlaying
            ? (
              <VideoPlayer
                src={film.preview_video_link}
                poster={film.preview_image}
                isPlaying={isPlaying}
              />)
            : (<img src={film.preview_image} alt={film.name} />)
          }
          <h3 className="small-movie-card__title">
            <span className="small-movie-card__link">{film.name}</span>
          </h3>
        </div>
      </Link>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};
