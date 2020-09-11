import React from 'react';
import { shallow, mount } from 'enzyme';
import EmployeeForm from './EmployeeForm';
import expect from 'expect';

describe('<EmployeeForm />', () => {
  const props = {
    callbackId: jest.fn()
  }
  const employeeFormWrapper = shallow(
    <EmployeeForm {...props}/>
  );

  it('should match the snapshot', () => {
    expect(employeeFormWrapper.html()).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = employeeFormWrapper.instance();

    expect(instance).toBeNull();
  });

  it('should render style and props correctly', () => {
    const inputGroup = employeeFormWrapper.props().children[0];
    const button = employeeFormWrapper.props().children[1];

    expect(inputGroup.props.children[1].props).toEqual({
      type: 'text',
      placeholder: 'Enter employee id',
      value: '',
      onChange: expect.any(Function)
    });
    expect(inputGroup.props.children[2].props.className).toBe('text-muted');
    expect(button.props).toEqual({
      variant: 'outline-dark',
      type: 'submit',
      children: 'Get Employees',
      active: false,
      disabled: false
    });
  });

  it('should set the id value on change event', () => {
    const employeeFormWrapperMount = mount(
      <EmployeeForm {...props}/>
    );

    employeeFormWrapperMount.find('input').simulate('change', {
      target: {
        value: 'idTest'
      },
    });
    expect(employeeFormWrapperMount.find('input').props().value).toBe(
      'idTest'
    );
  });

  it('should call the handleSubmit on click button', () => {
    const employeeFormWrapperMount = mount(
      <EmployeeForm {...props}/>
    );

    employeeFormWrapperMount.find('input').simulate('change', {
      target: {
        value: 'idTest'
      },
    });
    employeeFormWrapperMount.simulate('submit');
    expect(props.callbackId).toHaveBeenCalledWith(employeeFormWrapperMount.find('input').props().value);
    expect(props.callbackId).toHaveBeenCalledTimes(1);
  });
});