import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {userType} from '../../types/types.js';

import {isObjectEmpty} from '../../utils/is-object-empty.js';

import {Operation} from '../../operations/operation.js';
import {URL} from '../../utils/constants.js';

import {getIsFavoriteById} from '../../selector/selectors.js';

export const AddToFavoritesButton = (props) => {
  const {filmId, isFavorite, onFavoriteButtonClick, userData} = props;

  const history = useHistory();

  if (filmId === undefined) {
    return null;
  }

  const loginPageUrl = URL.LOGIN_PAGE_URL;

  const handleFavoriteButtonClick = () => {
    if (isObjectEmpty(userData)) {
      history.push(loginPageUrl);
    } else {
      onFavoriteButtonClick(filmId, +!isFavorite);
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
        onClick={handleFavoriteButtonClick}
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
  userData: userType,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    userData: state.userData,
    isFavorite: getIsFavoriteById(state, ownProps.filmId)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onFavoriteButtonClick: (filmId, status) => {
      dispatch(Operation.setFavorite(filmId, status));
      dispatch(Operation.loadFavoriteFilms());
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoritesButton);
