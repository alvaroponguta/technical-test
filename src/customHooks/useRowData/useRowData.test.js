import useRowData from './useRowData';
import expect from 'expect';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
jest.mock('axios');

describe('useRowData hook', () => {
  const mockEmployees = [
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
  ];

  it('should return an empty array if the call fail', () => {
    axios.get.mockRejectedValueOnce(new Error('Async error'));
    const { result } = renderHook(() => useRowData());

    expect(result.current.getRowData().length).toBe(0);
  });

  it('should return the data changed if the call brings the employees', async () => {
    const mockNewEmployees = mockEmployees.slice(0, 2);
    axios.get.mockResolvedValueOnce({
        data: mockEmployees
    });
    const { result, waitForNextUpdate } = renderHook(() => useRowData());

    result.current.getRowData();
    await waitForNextUpdate();

    mockNewEmployees[0].annualSalary = 120 * mockEmployees[0].hourlySalary * 12;
    mockNewEmployees[1].annualSalary = mockEmployees[1].monthlySalary * 12;
    expect(result.current.getRowData()).toEqual(mockNewEmployees);
  });
});