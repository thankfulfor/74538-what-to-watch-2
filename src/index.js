import * as React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import {Operation} from './operations/operation.js';

import {configureAPI} from './api.js';

import {changeFilterByGenre} from './reducers/change-filter-by-genre/change-filter-by-genre.js';
import {getFilmListByGenre} from './reducers/get-film-list-by-genre/get-film-list-by-genre.js';
import {increaseCountFilmsShow} from './reducers/increase-count-films-show/increase-count-films-show.js';
import {loadFilms} from './reducers/load-films/load-films.js';
import {loadPromo} from './reducers/load-promo/load-promo.js';

const reducers = combineReducers({
  films: loadFilms,
  promoFilm: loadPromo,
  genre: changeFilterByGenre,
  filteredFilms: getFilmListByGenre,
  countFilmsShow: increaseCountFilmsShow,
});

const onClick = function () {};

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
  // store.subscribe(() => {console.log(store.getState())});
  ReactDOM.render(
      <Provider store={store}>
        <App onClick={onClick} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
