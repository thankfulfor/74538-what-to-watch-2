import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {FilmList} from '../film-list/film-list-1.jsx';
import GenreTab from '../genre-tab/genre-tab.jsx';
import {ShowMoreButton} from '../show-more-button/show-more-button.jsx';

import {increaseCountFilmsShowAction} from '../../actions/increase-count-films-show.js';

import {getFilteredFilms, getGenres} from '../../selector/selectors.js';

export const GenreList = (props) => {
  const {onShowMoreButtonClick, filteredFilms, genres} = props;

  const showMoreButtonClickHandler = (evt) => {
    evt.preventDefault();
    onShowMoreButtonClick();
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
  countFilmsShow: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: state.films,
  genre: state.genre,
  countFilmsShow: state.countFilmsShow,
  filteredFilms: getFilteredFilms(state),
  genres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick: () => {
    dispatch(increaseCountFilmsShowAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

