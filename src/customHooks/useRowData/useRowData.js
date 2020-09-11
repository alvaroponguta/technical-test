import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const useRowData = () => {
    const [rowData, setRowData] = useState([]);
    const getRowData = useCallback(() => rowData, [rowData]);

    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('http://localhost:3000/employees');
                if (result) {
                    setRowData(result.data.map(employee => {
                        if (employee.contractType === 'Hourly Salary') {
                            employee.annualSalary = 120 * employee.hourlySalary * 12;
                        } else if (employee.contractType === 'Monthly Salary') {
                            employee.annualSalary = employee.monthlySalary * 12;
                        }
                        return employee;
                    }));
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return { getRowData };
}

export default useRowData;