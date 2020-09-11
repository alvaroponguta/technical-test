import React from 'react';
import './Header.scss';
import { Container, Row, Col } from 'react-bootstrap';

const Header = props => {
  const {title} = props;

  return (
    <header>
        <Container className="header-container">
            <Row>
                <Col>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </header>
  );
}

export default Header;