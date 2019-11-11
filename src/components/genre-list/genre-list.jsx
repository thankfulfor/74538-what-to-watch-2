import * as React from 'react';
import PropTypes from 'prop-types';
import {FilmList} from '../film-list/film-list-1.jsx';
import GenreTab from '../genre-tab/genre-tab.jsx';
import {ShowMoreButton} from '../show-more-button/show-more-button.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

export const GenreList = (props) => {
  const {allFilms, films, countGenres, onShowMoreButtonClick, countFilmsShow} = props;

  const genres = [`All genres`];

  const getGenres = () => {
    allFilms.forEach((film) => (genres.push(film.genre)));
    return [...new Set(genres)].slice(0, countGenres);
  };

  const showPartOfFilms = () => {
    return films.slice(0, countFilmsShow);
  };

  const showMoreButtonClickHandler = (evt) => {
    evt.preventDefault();
    onShowMoreButtonClick();
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreTab genres={getGenres()} />

      <FilmList films={showPartOfFilms()} />

      <ShowMoreButton onClick={showMoreButtonClickHandler} />
    </section>
  );
};

GenreList.propTypes = {
  allFilms: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  countGenres: PropTypes.number.isRequired,
  countFilmsShow: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: state.filmCards,
  genre: state.genre,
  countGenres: state.countGenres,
  countFilmsShow: state.countFilmsShow,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick: () => {
    dispatch(ActionCreator.increaseCountFilmsShow());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

