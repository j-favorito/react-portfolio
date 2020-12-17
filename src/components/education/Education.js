import React from 'react';
import './Education.css';
import uoa from './uoa-bw.png';
import { Container, Row, Col } from 'react-bootstrap'

function Education() {
  return (
    <div>
      <center>
        <Container>
          <Row>
            <Col lg="1"></Col>
            <Col lg="10">
              <img src={uoa} alt="UniversityImage" className="uoa-image"/>
              <h5 className="ed-text">Full-Stack Web Development</h5>
              <p className="ed-text">February 2020 - August 2020</p>
            </Col>
            <Col lg="1"></Col>
          </Row>
        </Container>
      </center>
    </div>
  );
}

export default Education;