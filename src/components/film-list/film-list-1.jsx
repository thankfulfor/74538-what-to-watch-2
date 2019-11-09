import * as React from 'react';
import PropTypes from 'prop-types';
import {FilmCard} from '../film-card/film-card.jsx';
import {connect} from 'react-redux';

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
    const {filmCards} = this.props;
    return (
      <div className="catalog__movies-list">{
        filmCards.map((film, i) => {
          return (
            <FilmCard onHover={this.hoverHandler} key={`${film.name}-${i}`} film={film} />
          );
        })
      }</div>
    );
  }
}

FilmList.propTypes = {
  filmCards: PropTypes.array.isRequired,
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filmCards: state.filmCards,
});

export default connect(mapStateToProps)(FilmList);
