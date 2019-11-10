import * as React from 'react';
import PropTypes from 'prop-types';
import {FilmCard} from '../film-card/film-card.jsx';

export const FilmList = (props) => {
  const {films} = props;


  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => <FilmCard key={`${film.name}-${i}`} film={film} />)}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};
