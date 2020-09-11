import React from 'react';
import './Subtitle.scss';
import { Container, Row, Col } from 'react-bootstrap';

const Subtitle = props => {
  const {text} = props;

  return (
    <header>
        <Container className="subtitle-container">
            <Row>
                <Col>
                    <h2>{text}</h2>
                </Col>
            </Row>
        </Container>
    </header>
  );
}

export default Subtitle;