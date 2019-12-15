import * as React from 'react';
import FilmCard from '../film-card/film-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {filmsType} from '../../types/types.js';

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
  films: filmsType,
};
