import React from 'react';
import Enzyme, {mount} from 'enzyme';
import withShowItem from './with-show-item';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe(`HOC withShowItem рендерится корректно`, () => {
  let wrapper;

  beforeEach(() => {
    const MockComponent = () => <div />;
    const MockComponentWrapped = withShowItem(MockComponent);

    wrapper = mount(<MockComponentWrapped />);
  });

  it(`По умолчанию isShown === false`, () => {
    expect(wrapper.state().isShown).toEqual(false);
  });

  it(`По клику переключает isShown в false`, () => {
    wrapper.instance().exitButtonClickHandler();
    expect(wrapper.state().isShown).toEqual(false);
  });
});
