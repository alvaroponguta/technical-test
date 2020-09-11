import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import expect from 'expect';

describe('<App />', () => {
  const appWrapper = shallow(<App />);

  it('should match the snapshot', () => {
    expect(appWrapper.html()).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = appWrapper.instance();

    expect(instance).toBeNull();
  });

  it('should render style correctly', () => {
    const div = appWrapper.find('div');
    expect(div.props().className).toBe('App');
  });
});