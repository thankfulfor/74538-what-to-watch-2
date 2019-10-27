import * as React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

export const App = (props) => {
  const {films, onClick} = props;
  return (
    <WelcomeScreen films={films} onClick={onClick}/>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};


