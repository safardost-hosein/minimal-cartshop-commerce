import React from "react";
import Button from "../button/Button";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="sections">
          <div className="section">
            <p className="footer-title">:آدرس</p>
            <span>تهران،میدان انقلاب،خیابان اردیبهشت</span>
          </div>
          <div className="section">
            <p className="footer-title">:تلفن</p>
            <span>09195597116  </span>
          </div>
          <div className="section">
            <p className="footer-title">:جیمیل</p>
            <span>hsnsafardost@gmail.com  </span>
          </div>
        </div>
        <div className="social-media">
            <Button buttonStyle='btn-footer'><i className="fa-brands fa-telegram"></i></Button>
            <Button buttonStyle='btn-footer'><i className="fa-brands fa-whatsapp"></i></Button>
            <Button buttonStyle='btn-footer'><i className="fa-brands fa-twitter"></i></Button>
            <Button buttonStyle='btn-footer'><i className="fa-brands fa-discord"></i></Button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
