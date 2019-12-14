import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {formatDate} from '../../utils/date-convert.js';

export const FilmReviews = (props) => {

  const {reviews} = props;

  if (reviews === undefined) {
    return null;
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.length === 0
          ? <p className="review__text">There is no reviews. Be the first to add one.</p>
          : reviews.map((review) =>
            <div className="review" key={review.user.name}>
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{formatDate(review.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          )
        }
      </div>
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    reviews: state.reviews,
  });
};

export default connect(mapStateToProps)(FilmReviews);
