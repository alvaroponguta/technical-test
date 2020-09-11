import React from 'react';
import { shallow } from 'enzyme';
import EmployeeTable from './EmployeeTable';
import expect from 'expect';
jest.mock('../../customHooks/useRowData/useRowData', () =>
    jest.fn().mockReturnValue({
        getRowData: jest.fn().mockReturnValue([
                        {
                            "id": "as231sdsd23",
                            "name": "Celica",
                            "contractType": "Hourly Salary",
                            "hourlySalary": 20000
                        },
                        {
                            "id": "df231mfks88",
                            "name": "Mondeo",
                            "contractType": "Monthly Salary",
                            "monthlySalary": 3450000
                        }
                    ])
    })
)

describe('<EmployeeTable />', () => {
  const props = {
    idValue: undefined
  }
  const employeeTableWrapper = shallow(
    <EmployeeTable {...props}/>
  );

  it('should match the snapshot', () => {
    expect(employeeTableWrapper.html()).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = employeeTableWrapper.instance();

    expect(instance).toBeNull();
  });

  it('should render styles and initialize the table correctly', () => {
    const div = employeeTableWrapper.props();
    const table = div.children;

    expect(div.style).toEqual({"width": '100%', "height": '100%'});
    expect(div.className).toBe('ag-theme-alpine');
    expect(table.props).toMatchObject({
        onGridReady: expect.any(Function),
        animateRows: true,
        rowData: [],
        rowSelection: 'multiple',
        domLayout: 'autoHeight'
    });
    expect(table.props.children.length).toBe(6);
  });

  it('should bring the data if an employee id is provided from props', () => {
    const newProps = {
        idValue: ''
    }
    const newEmployeeTableWrapper = shallow(
        <EmployeeTable {...newProps}/>
    );

    expect(newEmployeeTableWrapper.props().children.props.rowData.length).toBe(2);
  });
});