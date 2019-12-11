import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {getFilmByIdFromUrl} from '../../selector/selectors.js';
import {URLS} from '../../utils/constants.js';
import {Operation} from '../../operations/operation.js';

export const AddReview = (props) => {
  const {film, isLoggedIn, avatarUrl, onAddReviewSubmit, history} = props;

  const {
    background_color: backgroundColor,
    poster_image: posterImage,
    background_image: backgroundImage,
    name,
    id,
  } = film;

  const style = {
    backgroundColor: `${backgroundColor}`,
  };

  const addReviewSubmitHandler = (evt) => {
    evt.preventDefault();
    document.getElementById(`fields`).setAttribute(`disabled`, `disabled`);
    const rating = Array.from(document.getElementsByClassName(`rating__input`)).find((radio) => radio.checked).value;
    const comment = document.getElementById(`review-text`).value;
    onAddReviewSubmit(id, rating, comment);
    history.push(`${URLS.FILMS_URL}/${id}`);
  };

  if (!isLoggedIn) {
    history.push(URLS.LOGIN_PAGE_URL);
  }

  return (
    <section className="movie-card movie-card--full" style={style}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${URLS.FILMS_URL}/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            {isLoggedIn
              ?
              <div className="user-block__avatar">
                <Link to={URLS.MY_LIST_URL}><img src={avatarUrl} alt="User avatar" width="63" height="63" /></Link>
              </div>
              : <Link to={URLS.LOGIN_PAGE_URL}>Sign In</Link>
            }
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={addReviewSubmitHandler}>
          <fieldset id="fields">
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                maxLength="400"
                minLength="50"
                required={true}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </fieldset>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  onAddReviewSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, {match}) => {
  const film = getFilmByIdFromUrl(state, match.params.id);
  const isLoggedIn = state.isLoggedIn;
  const avatarUrl = URLS.BASE_URL + state.userData.avatar_url;

  return {film, isLoggedIn, avatarUrl};
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onAddReviewSubmit: (id, rating, text) => {
      dispatch(Operation.postComments(id, rating, text));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

