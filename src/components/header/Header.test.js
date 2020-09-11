import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import expect from 'expect';

describe('<Header />', () => {
  const props = {
      title: 'Technical Test'
  }
  const headerWrapper = shallow(<Header {...props}/>);

  it('should match the snapshot', () => {
    expect(headerWrapper.html()).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = headerWrapper.instance();

    expect(instance).toBeNull();
  });

  it('should render style and props correctly', () => {
    const header = headerWrapper.find('header');
    const h1 = headerWrapper.find('h1');

    expect(h1.props().children).toBe(props.title);
    expect(header.props().children.props.className).toBe('header-container');
  });
});