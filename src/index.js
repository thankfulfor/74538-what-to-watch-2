import * as React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {reducer} from './reducer.js';
import {Provider} from 'react-redux';

import {App} from './components/app/app.jsx';
import {films} from './mock/films.js';

const onClick = function () {};

const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App films={films} onClick={onClick} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
