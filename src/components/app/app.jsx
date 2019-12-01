import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import withShowItem from '../../hoc/with-show-item/with-show-item.jsx';

const WelcomeScreenWrapped = withShowItem(WelcomeScreen);

export const App = (props) => {
  const {films, onClick, promoFilm} = props;

  if (films.length === 0 || promoFilm === undefined) {
    return null;
  }

  return (
    <WelcomeScreenWrapped
      films={films}
      onClick={onClick}
      promoFilm={promoFilm}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: state.films,
    promoFilm: state.promoFilm
  });
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
