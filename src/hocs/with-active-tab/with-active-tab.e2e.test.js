import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveTab from './with-active-tab.jsx';
import {tabNames} from '../../utils/constants.js';

Enzyme.configure({adapter: new Adapter()});

describe(`HOC withActiveTab рендерится корректно`, () => {
  let wrapper;

  const mockText = `MockText`;
  const anotherMockText = `AnotherMockText`;

  const mockTab = ({onTabClick}) => (
    <button className="tab" onClick={onTabClick}>{mockText}</button>
  );

  const mockTabContent = () => (
    <span>{anotherMockText}</span>
  );

  mockTab.propTypes = {onTabClick: PropTypes.func.isRequired};
  mockTabContent.propTypes = {};

  const MockComponentWrapped = withActiveTab(mockTab, mockTabContent);

  beforeEach(() => {
    wrapper = mount(<MockComponentWrapped />);
  });

  it(`Исходное состояние tabToShow корректно`, () => {
    expect(wrapper.state(`tabToShow`)).toBe(tabNames[0]);
  });

  it(`onTabClick передает в tabToShow textContent`, () => {
    const tab = wrapper.find(`.tab`);
    tab.simulate(`click`);

    expect(wrapper.state(`tabToShow`)).toBe(mockText);
  });
});
