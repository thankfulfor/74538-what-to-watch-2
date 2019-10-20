import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const filmNames = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];

const onClick = function () {};

const init = () => {
  ReactDOM.render(
      <App
        filmNames={filmNames}
        onClick={onClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
