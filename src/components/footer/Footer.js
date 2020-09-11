import React from 'react';
import './Footer.scss';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Footer = props => {
  const {repoLink, footerText} = props;
  return (
    <footer style={{marginTop: 'auto'}}>
        <Container className="footer-container">
            <Row>
                <Col>
                    <p style={{marginBottom: 0}}>
                        <Alert.Link href={repoLink}>
                            {footerText}
                        </Alert.Link>
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;