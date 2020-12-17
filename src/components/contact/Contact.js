import React from "react";
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <center>
        <Container>
          <Row className="contact-card">
            <Col xl="1"></Col>
            <Col xl="2" className="contact-item"><strong>Cell Phone: </strong><br></br>612-558-6610</Col>
            <Col xl="4" className="contact-item"><strong>Email: </strong><br></br>joefavorito.work@gmail.com</Col>
            <Col xl="2" className="contact-item"><strong>LinkedIn: </strong><br></br><a className="contact-link" href="https://www.linkedin.com/in/joseph-favorito-1332481a1">Joseph Favorito</a></Col>
            <Col xl="2" className="contact-item"><strong>GitHub: </strong><br></br><a className="contact-link" href="https://github.com/j-favorito">j-favorito</a></Col>
            <Col xl="1"></Col>
          </Row>
        </Container>
      </center>
    </div>
  );
}

export default Contact;