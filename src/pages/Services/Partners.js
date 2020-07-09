import React from "react";

// Images
import odl from "static/images/media/partners/odl.png";
import gcs from "static/images/media/partners/gcs.png";
import mwm from "static/images/media/partners/mwm.png";

export default function Partners() {
  return (
    <div className="partners">
      <h2 className="heading">Our Partners</h2>
      <div className="images-container">
        <div className="image-container">
          <a href="http://omegadigitallabs.com/" rel="noopener noreferrer" target="_blank" className="partner-link">
            <img className="partner-image" name="social-media" src={odl} alt="Omega Digital Labs" />
          </a>
        </div>
        <div className="image-container">
          <a href="https://giriconsultancy.in/" rel="noopener noreferrer" target="_blank" className="partner-link">
            <img
              className="partner-image"
              name="recruitment"
              src={gcs}
              alt="Giri Consultancy Services"
            />
          </a>
        </div>
        <div className="image-container">
          <a href="https://www.marketwithmaddy.com/" rel="noopener noreferrer" target="_blank" className="partner-link">
            <img className="partner-image" name="startup" src={mwm} alt="Market with Maddy" />
          </a>
        </div>
      </div>
    </div>
  );
}
