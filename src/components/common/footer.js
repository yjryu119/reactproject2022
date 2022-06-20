import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="customized-footer-wrapper">
      <div className="customized-footer">
        <Row>
          <Col>
            <div className="card-title">ABOUT MOGUTABLE</div>
            <div className="">Well-Made Objects for Everyday Life</div>
            <div>130 Grand St, Brooklyn, NY 11249</div>
            <div>© 2021 MOGUTABLE ALL RIGHTS RESERVED</div>
          </Col>
          <Col>
            <div className="card-title">SHOP</div>
            <div>Kitchen + Dining</div>
            <div>Living</div>
            <div>Art Prints</div>
          </Col>
          <Col>
            <div className="card-title">INFO</div>
            <div>About Us </div>
            <div>Contact</div>
            <div>Shipping & Return</div>
            <div>Privacy</div>
            <div>Policy</div>
            <div>FAQ</div>
            <div>Terms of Service</div>
            <div>Accessibility</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Footer;
