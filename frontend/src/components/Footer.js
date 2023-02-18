import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/MasterCard_early_1990s_logo.svg"
          ></img>
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
          ></img>
        </div>
        <img
          alt="paypal"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
        ></img>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
