import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div>
      <center>
        <div className="row contact-card">
          <div className="col-xl-2"></div>
          <div className="col-xl-2 contact-item"><strong>Cell Phone: </strong><br></br>612-558-6610</div>
          <div className="col-xl-2 contact-item"><strong>Email: </strong><br></br>joefavorito.work@gmail.com</div>
          <div className="col-xl-2 contact-item"><strong>LinkedIn: </strong><br></br><a className="contact-link" href="https://www.linkedin.com/in/joseph-favorito-1332481a1">Joseph Favorito</a></div>
          <div className="col-xl-2 contact-item"><strong>GitHub: </strong><br></br><a className="contact-link" href="https://github.com/j-favorito">j-favorito</a></div>
          <div className="col-xl-2"></div>
        </div>
      </center>
    </div>
  );
}

export default Contact;