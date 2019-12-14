import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {MemoryRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import withAuth from './with-auth.jsx';
import {URLS} from '../../utils/constants.js';

Enzyme.configure({adapter: new Adapter()});

const userData = {
  // eslint-disable-next-line camelcase
  avatar_url: `/wtw/static/avatar/5.jpg`,
  email: `dfkds@sdklfd.ru`,
  id: 1,
  name: `dfkds`
};

const MyList = () => <h1>Только для зарегистрированного пользователя</h1>;
const SignIn = () => <h2>Залогиньтесь</h2>;

const MockComponent = () => (
  <MemoryRouter initialEntries={[`/`]}>
    <Route path={URLS.MAIN_PAGE_URL} component={withAuth(MyList)} />
    <Route path={URLS.LOGIN_PAGE_URL} component={SignIn} />
  </MemoryRouter>
);

describe(`withAuth hoc работает корректно`, () => {
  const mockStore = configureStore([]);

  it(`Для авторизованного юзера заходит в приватный маршрут`, () => {
    const store = mockStore({userData});

    const component = mount(
        <Provider store={store}>
          <MockComponent />
        </Provider>
    );

    expect(component.find(`h1`)).toHaveLength(1);
    expect(component.find(`h2`)).toHaveLength(0);
  });

  it(`Для НЕавторизованного юзера НЕ заходит в приватный маршрут`, () => {
    const store = mockStore({userData: {}});

    const component = mount(
        <Provider store={store}>
          <MockComponent />
        </Provider>
    );

    expect(component.find(`h1`)).toHaveLength(0);
    expect(component.find(`h2`)).toHaveLength(1);
  });
});
