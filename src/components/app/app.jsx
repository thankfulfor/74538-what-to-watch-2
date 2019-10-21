import * as React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

export const App = (props) => {
  const {filmNames, onClick} = props;
  return (
    <WelcomeScreen filmNames={filmNames} onClick={onClick}/>
  );
};

App.propTypes = {
  filmNames: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};


