import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {FilmList} from '../film-list/film-list-1.jsx';
import GenreTab from '../genre-tab/genre-tab.jsx';
import {ShowMoreButton} from '../show-more-button/show-more-button.jsx';

import {setCountFilmsShowAction} from '../../actions/set-count-films-show.js';

import {getFilteredFilms, getGenres} from '../../selector/selectors.js';
import {CountConstants} from '../../utils/constants.js';

export const GenreList = (props) => {
  const {onShowMoreButtonClick, filteredFilms, genres, countFilmsShow} = props;

  const showMoreButtonClickHandler = (evt) => {
    evt.preventDefault();
    onShowMoreButtonClick(countFilmsShow);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreTab genres={genres} />

      <FilmList films={filteredFilms} />

      <ShowMoreButton onClick={showMoreButtonClickHandler} />
    </section>
  );
};

GenreList.propTypes = {
  films: PropTypes.array.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  countFilmsShow: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: state.films,
  genre: state.genre,
  filteredFilms: getFilteredFilms(state.films, state.genre, state.countFilmsShow),
  genres: getGenres(state),
  countFilmsShow: state.countFilmsShow + CountConstants.COUNT_FILMS_SHOW_MORE
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick: (countFilmsShow) => {
    dispatch(setCountFilmsShowAction(countFilmsShow));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

