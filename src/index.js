import * as React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {history} from './history.js';

import App from './components/app/app.jsx';
import {Operation} from './operations/operation.js';

import {configureAPI} from './api.js';

import {changeFilterByGenre} from './reducers/change-filter-by-genre/change-filter-by-genre.js';
import {increaseCountFilmsShow} from './reducers/increase-count-films-show/increase-count-films-show.js';
import {loadFilms} from './reducers/load-films/load-films.js';
import {loadPromo} from './reducers/load-promo/load-promo.js';
import {updateUserData} from './reducers/update-user-data/update-user-data.js';
import {setLoggedIn} from './reducers/set-logged-in/set-logged-in.js';
import {loadFavoriteFilms} from './reducers/load-favorite-films/load-favorite-films.js';

const reducers = combineReducers({
  films: loadFilms,
  promoFilm: loadPromo,
  genre: changeFilterByGenre,
  countFilmsShow: increaseCountFilmsShow,
  userData: updateUserData,
  isLoggedIn: setLoggedIn,
  favoriteFilms: loadFavoriteFilms,
});

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducers,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadPromo());
  store.dispatch(Operation.loadFilms());
  store.dispatch(Operation.loadFavoriteFilms());
  store.dispatch(Operation.getLogin());
  // store.subscribe(() => {console.log(store.getState())});

  const AppWrapped = withRouter(App);

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <AppWrapped />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
