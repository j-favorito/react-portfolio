import React from "react";
import certificate from './certificate.png'
import './Certificate.css'
import { Container, Row, Col } from 'react-bootstrap'

function Certificate() {
  return (
    <div>
      <center>
        <Container>
        <Row>
          <Col lg="1"></Col>
          <Col lg="10">
            <img src ={certificate} alt='U o A Certificate' className='cert-img'></img>
          </Col>
          <Col lg="1"></Col>
        </Row>
        </Container>
      </center>
    </div>
  );
}

export default Certificate;