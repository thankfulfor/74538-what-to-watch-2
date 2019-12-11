import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {URLS} from '../../utils/constants.js';
import {VideoPlayer} from '../video-player/video-player.jsx';
import {Operation} from '../../operations/operation.js';
import {connect} from 'react-redux';

export const FilmCard = (props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave, onCardClick} = props;

  const {
    id,
    preview_video_link: previewVideoLink,
    preview_image: previewImage,
    name
  } = film;

  const cardClickHandler = () => {
    onCardClick(id);
  };

  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="small-movie-card catalog__movies-card"
    >
      <Link to={`${URLS.FILMS_URL}/${film.id}`} onClick={cardClickHandler}>
        <div className="small-movie-card__image">
          {isPlaying
            ? (
              <VideoPlayer
                src={previewVideoLink}
                poster={previewImage}
                isPlaying={isPlaying}
              />)
            : (<img src={previewImage} alt={name} />)
          }
          <h3 className="small-movie-card__title">
            <span className="small-movie-card__link">{name}</span>
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
  onCardClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onCardClick: (id) => {
      dispatch(Operation.getReviews(id));
    }
  });
};

export default connect(null, mapDispatchToProps)(FilmCard);
