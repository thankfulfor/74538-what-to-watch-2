import * as React from 'react';
import PropTypes from 'prop-types';
import {FilmCard} from '../film-card/film-card.jsx';

export class FilmList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    };
    this.hoverHandler = this.hoverHandler.bind(this);
  }

  hoverHandler(film) {
    this.setState({
      film,
    });
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">{
        films.map((film, i) => {
          return (
            <FilmCard onHover={this.hoverHandler} key={`${film.name}-${i}`} film={film} />
          );
        })
      }</div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};
