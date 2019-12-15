import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import withOpenCloseButtons from './with-open-close-buttons.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe(`HOC withOpenCloseButtons рендерится корректно`, () => {
  let wrapper;

  const mockButton = ({onShowPlayerButtonClick}) => (
    <button className="button__open" onClick={onShowPlayerButtonClick}>
      Play
    </button>
  );

  const mockPopup = ({onExitButtonClick}) => (
    <button className="button__close" onClick={onExitButtonClick}>
      Close
    </button>
  );

  mockButton.propTypes = {onShowPlayerButtonClick: PropTypes.func.isRequired};
  mockPopup.propTypes = {onExitButtonClick: PropTypes.func.isRequired};

  const MockComponentWrapped = withOpenCloseButtons(mockPopup, mockButton);

  beforeEach(() => {
    wrapper = mount(<MockComponentWrapped />);
  });

  it(`Исходное состояние isShown корректно`, () => {
    expect(wrapper.state(`isShown`)).toBe(false);
  });

  it(`showPlayerButtonClick переключает isShown в true`, () => {
    const buttonOpen = wrapper.find(`.button__open`);
    buttonOpen.simulate(`click`);

    expect(wrapper.state(`isShown`)).toBe(true);
  });

  let instance;

  it(`onExitButtonClick переключает isShown в false`, () => {
    const buttonOpen = wrapper.find(`.button__open`);
    buttonOpen.simulate(`click`);

    const close = wrapper.find(`.button__close`);
    close.simulate(`click`);

    expect(wrapper.state(`isShown`)).toBe(false);
  });

  it(`escapeButtonPress переключает isShown в false`, () => {
    instance = wrapper.instance();
    instance.escapeButtonPressHandle({keyCode: 27});

    expect(wrapper.state(`isShown`)).toBe(false);
  });
});
