import React from "react";

const Contactinfo = () => {
  return (
    <div className="contactinfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call us 24x7</h5>
            <p>+381 066 555 555</p>
          </div>
        </div>

        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquater</h5>
            <p>Belgrade, Vozdovac</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Fax</h5>
            <p>+381 066 555 555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
