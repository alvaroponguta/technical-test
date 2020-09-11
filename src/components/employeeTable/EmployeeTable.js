import React, { useState, useEffect, useRef } from 'react';
import './EmployeeTable.scss';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import useRowData from '../../customHooks/useRowData/useRowData';

const EmployeeTable = props => {
    const {idValue} = props;
    const [gridApi, setGridApi] = useState(null);
    const rowData = useRef([]);
    const employeesData = useRowData().getRowData();
    const idIsDefined = idValue !== undefined;

    if (idIsDefined) {
        rowData.current = employeesData;
    }

    useEffect(() => {
        if (idIsDefined) {
            const idFilter = gridApi.getFilterInstance('id');

            if (idValue !== '') {
                idFilter.setModel({
                    type: 'equals',
                    filter: idValue
                });
            } else {
                idFilter.setModel(null);
            }

            idFilter.applyModel();
            gridApi.onFilterChanged();
        }
    }, [idValue, gridApi, idIsDefined]);

    const onGridReady = params => {
        setGridApi(params.api);
    }

    return (
        <div className="ag-theme-alpine" style={ {width: '100%', height: '100%'} }>
            <AgGridReact
                onGridReady={onGridReady}
                animateRows
                rowData={rowData.current}
                rowSelection="multiple"
                domLayout="autoHeight">
                <AgGridColumn field="id" sortable={true} ></AgGridColumn>
                <AgGridColumn field="name" sortable={true} ></AgGridColumn>
                <AgGridColumn field="contractType" sortable={true} ></AgGridColumn>
                <AgGridColumn field="hourlySalary" sortable={true} ></AgGridColumn>
                <AgGridColumn field="monthlySalary" sortable={true} ></AgGridColumn>
                <AgGridColumn field="annualSalary" sortable={true} ></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default EmployeeTable;