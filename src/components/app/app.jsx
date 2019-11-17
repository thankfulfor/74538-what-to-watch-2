import * as React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import withShowItem from '../../hoc/with-show-item/with-show-item.jsx';

const WelcomeScreenWrapped = withShowItem(WelcomeScreen);

export const App = (props) => {
  const {films, onClick} = props;

  return (
    <WelcomeScreenWrapped
      films={films}
      onClick={onClick}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};
