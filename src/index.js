import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {films} from './mock/films.js';

const onClick = function () {};

const init = () => {
  ReactDOM.render(
      <App
        films={films}
        onClick={onClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
