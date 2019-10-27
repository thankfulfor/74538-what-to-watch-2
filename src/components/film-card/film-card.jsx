import * as React from 'react';
import PropTypes from 'prop-types';

export class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onHover} = this.props;

    const mouseOverHandler = () => {
      onHover(film);
    };

    return (
      <article onMouseEnter={mouseOverHandler} className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={film.picture} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  onHover: PropTypes.func.isRequired
};
