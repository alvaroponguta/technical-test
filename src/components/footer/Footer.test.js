import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import expect from 'expect';

describe('<Footer />', () => {
  const props = {
    footerText: 'Github repository',
    repoLink: 'https://github.com'
  }
  const footerWrapper = shallow(<Footer {...props}/>);

  it('should match the snapshot', () => {
    expect(footerWrapper.html()).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = footerWrapper.instance();

    expect(instance).toBeNull();
  });

  it('should render style and props correctly', () => {
    const container = footerWrapper.props().children;
    const p = footerWrapper.find('p');
    const anchor = p.props().children;

    expect(footerWrapper.props().style).toEqual({"marginTop": 'auto'});
    expect(container.props.className).toBe('footer-container');
    expect(p.props().style).toEqual({"marginBottom": 0});
    expect(anchor.props.href).toBe(props.repoLink);
    expect(anchor.props.children).toBe(props.footerText);
  });
});