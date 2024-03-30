import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_contacts">
          <p className="contacts_number"> +381 82 318 032</p>
        </div>
        <div className="footer_post">
          <p className="contacts_post"> building@build.com</p>
        </div>
        <div className="footer_smm">
          <a href="https://www.facebook.com/">
            <img src="img/facebook.png"></img>
          </a>
          <a href="https://www.facebook.com/">
            <img src="img/instagram.png"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
