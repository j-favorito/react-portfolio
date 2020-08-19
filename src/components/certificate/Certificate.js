import React from "react";
import certificate from './certificate.png'
import './Certificate.css'


function Certificate() {
  return (
    <div>
      <center>
        <main className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <img src ={certificate} alt='U o A Certificate' className='cert-img'></img>
          </div>
          <div className="col-lg-1"></div>
        </main>
      </center>
    </div>
  );
}

export default Certificate;