import React, { useState } from 'react';
import './EmployeeForm.scss';
import { Form, Button } from 'react-bootstrap';

const EmployeeForm = props => {
  const {callbackId} = props;
  const [idValue, setIdValue] = useState('');

  const handleChange = event => {
    setIdValue(event.target.value);
  }

  const handleSubmit = event => {
    callbackId(idValue);
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmployeeID">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter employee id"
              value={idValue}
              onChange={handleChange}/>
            <Form.Text className="text-muted">
                Leave this field empty to see all employees.
            </Form.Text>
        </Form.Group>
        <Button variant="outline-dark" type="submit">
            Get Employees
        </Button>
    </Form>
  );
}

export default EmployeeForm;