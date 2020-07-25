import React from "react";
import './Education.css'
import uoa from './uoa-bw.png'

function Education() {
  return (
    <div>
      <center>
        <main className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <img src={uoa} alt="UniversityImage" className="uoa-image" height="150px" width="80%" />
            <h5 className="ed-text">Full-Stack Web Development</h5>
            <p className="ed-text">February 2020 - August 2020</p>
          </div>
          <div className="col-lg-1"></div>
        </main>
      </center>
    </div>
  );
}

export default Education;