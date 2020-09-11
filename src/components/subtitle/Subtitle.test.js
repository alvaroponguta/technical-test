import React from 'react';
import { shallow } from 'enzyme';
import Subtitle from './Subtitle';
import expect from 'expect';

describe('<Subtitle />', () => {
  const props = {
    text: 'Employees Table'
  }
  const subtitleWrapper = shallow(<Subtitle {...props}/>);

  it('should match the snapshot', () => {
    expect(subtitleWrapper.html()).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = subtitleWrapper.instance();

    expect(instance).toBeNull();
  });

  it('should render style and props correctly', () => {
    const container = subtitleWrapper.props().children;
    const h2 = subtitleWrapper.find('h2');

    expect(container.props.className).toBe('subtitle-container');
    expect(h2.props().children).toBe(props.text);
  });
});