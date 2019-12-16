import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeFilterByGenreAction} from '../../actions/change-filter-by-genre.js';
import {getFilmListByGenreAction} from '../../actions/get-film-list-by-genre.js';
import {setCountFilmsShowAction} from '../../actions/set-count-films-show.js';

export const GenreTab = (props) => {
  const {genres, onTabClick, genre} = props;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    onTabClick(evt.target.textContent);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem, i) => {
        return (
          <li className={`catalog__genres-item ${genreItem === genre && `catalog__genres-item--active`}`} key={`${genreItem}-${i}`}>
            <span onClick={handleTabClick} className="catalog__genres-link">{genreItem}</span>
          </li>
        );
      })}
    </ul>
  );
};

GenreTab.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  genre: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    onTabClick: (genre) => {
      dispatch(changeFilterByGenreAction(genre));
      dispatch(getFilmListByGenreAction(genre));
      dispatch(setCountFilmsShowAction());
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreTab);
