import * as React from 'react';
import {URLS} from '../../utils/constants.js';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to={URLS.MAIN_PAGE_URL} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">F</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};
