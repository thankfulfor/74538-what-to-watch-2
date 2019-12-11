import * as React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import withActiveItem from '../../hoc/with-active-item/with-active-item.jsx';

const FilmCardWrapped = withActiveItem(FilmCard);

export const FilmList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => <FilmCardWrapped key={`${film.name}-${i}`} film={film} />)}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};
