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
            <Col xl="4" className="contact-item"><strong>Email: </strong><br></br><a className="contact-link" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=joefavorito.work@gmail.com" target="_blank" rel="noreferrer">joefavorito.work@gmail.com</a></Col>
            <Col xl="2" className="contact-item"><strong>LinkedIn: </strong><br></br><a className="contact-link" href="https://www.linkedin.com/in/joseph-favorito-1332481a1" target="_blank" rel="noreferrer">Joseph Favorito</a></Col>
            <Col xl="2" className="contact-item"><strong>GitHub: </strong><br></br><a className="contact-link" href="https://github.com/j-favorito" target="_blank" rel="noreferrer">j-favorito</a></Col>
            <Col xl="1"></Col>
          </Row>
        </Container>
      </center>
    </div>
  );
}

export default Contact;