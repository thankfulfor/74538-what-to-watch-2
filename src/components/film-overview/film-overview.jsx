import * as React from 'react';
import PropTypes from 'prop-types';

export const FilmOverview = (props) => {
  const {film} = props;
  const {description, rating, director, starring, scores_count: scoresCount} = film;

  const renderTextRating = (score) => {
    switch (true) {
      case (score <= 3):
        return `Bad`;
      case (score <= 5):
        return `Normal`;
      case (score <= 8):
        return `Good`;
      case (score <= 10):
        return `Very good`;
      case (score > 10):
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
            Starring:
            {starring.map((star, i) => <React.Fragment key={`${star}-${i}`}>{star}{!!i && `,`}</React.Fragment>)} and other
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.object.isRequired,
};
