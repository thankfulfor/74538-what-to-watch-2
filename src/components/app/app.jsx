import * as React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {filmsType, filmType} from '../../types/types.js';

import AddReview from '../add-review/add-review.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

import withAuth from '../../hocs/with-auth/with-auth.jsx';

import {URL} from '../../utils/constants.js';

import withShowItem from '../../hocs/with-show-item/with-show-item.jsx';

const WelcomeScreenWrapped = withShowItem(WelcomeScreen);

export const App = (props) => {
  const {films, promoFilm} = props;

  if (films.length === 0 || promoFilm === undefined) {
    return null;
  }

  return (
    <Switch>
      <Route exact path={URL.MAIN_PAGE_URL} component={WelcomeScreenWrapped} />
      <Route exact path={URL.LOGIN_PAGE_URL} component={SignIn} />
      <Route exact path={URL.MY_LIST_URL} component={withAuth(MyList)} />
      <Route exact path={URL.FILM_PAGE_URL} component={MoviePage}/>
      <Route exact path={URL.ADD_REVIEW_PAGE_URL} component={withAuth(AddReview)}/>
    </Switch>
  );
};

App.propTypes = {
  films: filmsType,
  promoFilm: filmType,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: state.films,
    promoFilm: state.promoFilm,
  });
};

export default connect(mapStateToProps)(App);
