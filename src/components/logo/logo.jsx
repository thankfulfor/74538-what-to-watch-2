import * as React from 'react';

import {Link} from 'react-router-dom';
import {URLS} from '../../utils/constants.js';

export const Logo = () => (
  <div className="logo">
    <Link to={URLS.MAIN_PAGE_URL} className="logo__link">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

