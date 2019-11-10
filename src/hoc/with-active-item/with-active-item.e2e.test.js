import React from 'react';
import Enzyme, {mount} from 'enzyme';
import withActiveItem from './with-active-item.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

jest.useFakeTimers();

describe(`HOC withActiveItem рендерится корректно`, () => {
  let wrapper;

  beforeEach(() => {
    const MockComponent = () => <div />;
    const MockComponentWrapped = withActiveItem(MockComponent);

    wrapper = mount(<MockComponentWrapped />);
  });

  it(`По умолчанию возвращает false`, () => {
    expect(wrapper.state().isPlaying).toEqual(false);
  });

  it(`По наведению через заданное время переключает isPlaying`, () => {
    wrapper.instance().mouseOverHandler();
    jest.runOnlyPendingTimers();
    expect(wrapper.state().isPlaying).toEqual(true);
  });
});
