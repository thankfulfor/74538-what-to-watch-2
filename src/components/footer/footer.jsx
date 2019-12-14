import * as React from 'react';

import {Logo} from '../logo/logo.jsx';


export const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};
