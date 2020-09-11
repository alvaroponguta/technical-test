import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Subtitle from './components/subtitle/Subtitle';
import { Container, Row, Col } from 'react-bootstrap';
import EmployeeForm from './components/employeeForm/EmployeeForm';
import EmployeeTable from './components/employeeTable/EmployeeTable';

const App = () => {
  const [idValue, setIdValue] = useState(undefined);

  return (
    <div className="App">
      <Header title='Technical Test'/>
      <Container>
        <Subtitle text='Employees Table'/>
        <Row>
          <Col>
            <EmployeeForm callbackId={setIdValue}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <EmployeeTable idValue={idValue}/>
          </Col>
        </Row>
      </Container>
      <Footer footerText='Github repository' repoLink='https://github.com/alvaroponguta/technical-test'/>
    </div>
  );
}

export default App;