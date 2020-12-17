import React from "react";
import "./About.css";
import profPic from './prof.jpg'
import { Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <div>
      <center>
        <Container>
          <Row className="main-body">
            <Col xl="4">
              <img src={profPic} alt="ProfilePic" className="prof-pic" />
            </Col>
            <Col xl="8" className="p-content">
              Hello! My name is Joseph Favorito, you can call me Joe.
              I am an aspiring full-stack software engineer.
              Regarding front-end I have knowledge of HTML, CSS, and JavaScript as well as Bootstrap, Pure, and jQuery.
              Back-end wise I have learned Node as well as Express, Mysql, and Sequelize.
              I am also capable of using MongoDB and React.
              I am a quick learner who is looking to gain as much knowledge as I can.
                  </Col>
          </Row>
        </Container>
      </center>
    </div>
  );
}

export default About;