import * as React from 'react';
import PropTypes from 'prop-types';

import {RATING} from '../../utils/constants.js';

export const FilmOverview = (props) => {
  const {film} = props;
  const {description, rating, director, starring, scores_count: scoresCount} = film;

  const renderTextRating = (score) => {
    switch (true) {
      case (score <= RATING.Bad):
        return `Bad`;
      case (score <= RATING.Normal):
        return `Normal`;
      case (score <= RATING.Good):
        return `Good`;
      case (score <= RATING.VeryGood):
        return `Very good`;
      case (score > RATING.Awesome):
        return `Awesome`;
      default:
        return `No scores yet`;
    }
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{renderTextRating(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring">
          <strong>
            Starring:{` `}
            Starring:{` `}
            {starring
              .map((star, i) => <React.Fragment key={`${star}-${i}`}>{star}</React.Fragment>)
              .reduce((prev, curr) => [prev, `, `, curr])
            } and other
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string,
    rating: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    // eslint-disable-next-line camelcase
    scores_count: PropTypes.number,
  }).isRequired,
};
