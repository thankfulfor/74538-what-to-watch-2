import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

export const GenreTab = (props) => {
  const {genres, onTabClick} = props;

  const tabClickHandler = (evt) => {
    evt.preventDefault();
    onTabClick(evt.target.textContent);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li className="catalog__genres-item" key={`${genre}-${i}`}>
            <a onClick={tabClickHandler} href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenreTab.propTypes = {
  genres: PropTypes.array.isRequired,
  onTabClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (genre) => {
    dispatch(ActionCreator.changeFilterByGenre(genre));
    dispatch(ActionCreator.getFilmListByGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreTab);
