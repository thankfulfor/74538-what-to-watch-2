import * as React from 'react';
import PropTypes from 'prop-types';
import {tabNames} from '../../utils/constants.js';

export const FilmTabs = (props) => {
  const {onTabClick, tabToShow} = props;

  return (
    <ul className="movie-nav__list">
      {tabNames.map((tabName) => (
        <li key={tabName} onClick={onTabClick} className={`movie-nav__item ${tabToShow === tabName && `movie-nav__item--active`}`}>
          <span className="movie-nav__link">{tabName}</span>
        </li>
      ))}
    </ul>
  );
};

FilmTabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  tabToShow: PropTypes.string.isRequired,
};
