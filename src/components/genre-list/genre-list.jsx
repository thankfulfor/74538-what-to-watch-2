import * as React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list-1.jsx';
import GenreTab from '../genre-tab/genre-tab.jsx';
import {connect} from 'react-redux';

export const GenreList = (props) => {
  const {films} = props;

  const genres = [`All genres`];

  const getGenres = () => {
    films.forEach((film) => (genres.push(film.genre)));
    return [...new Set(genres)];
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreTab genres={getGenres()} />

      <FilmList films={films} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

GenreList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
});

export default connect(mapStateToProps)(GenreList);

