import React from 'react';
import Flexi from './components/Flexi';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { flexiConfig } from './config/config';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const onFlexiSubmit = (formData) => {
    // Handle form submission with the formData
    console.log('Form Data:', formData);
  };

  return (
    <Container>
      <Row className='mt-5 text-center'>
        <h2>DYNAMIC FORMS</h2>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='mt-3' style={{ background: '#f9F9F9' }}>
            <Card.Body>
              <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
