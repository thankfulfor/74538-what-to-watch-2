import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from '../../operations/operation.js';
import {URLS} from '../../utils/constants.js';

export const AddToFavoritesButton = (props) => {
  const {filmId, isFavorite, onFavoriteButtonClick, isLoggedIn, history} = props;

  const loginPageUrl = URLS.LOGIN_PAGE_URL;

  const favoriteButtonClickHandler = () => {
    if (isLoggedIn) {
      onFavoriteButtonClick(filmId, +!isFavorite);
    } else {
      history.push(loginPageUrl);
    }
  };

  return (
    <React.Fragment>
      <div className="visually-hidden">
        <svg>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol>
        </svg>
      </div>
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick={favoriteButtonClickHandler}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isFavorite ? `#in-list` : `#add`} />
        </svg>
        <span>My list</span>
      </button>
    </React.Fragment>
  );
};

AddToFavoritesButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  filmId: PropTypes.number.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isLoggedIn: state.isLoggedIn,
    isFavorite: state.isFavorite
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onFavoriteButtonClick: (filmId, status) => {
      dispatch(Operation.setFavorite(filmId, status));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoritesButton);
