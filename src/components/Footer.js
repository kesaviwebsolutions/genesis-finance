import React from "react";
import "../App.css";
import {
  FaDiscord,
  FaTwitter,
  FaTelegramPlane,
  FaInstagramSquare,
  FaMedium,
} from "react-icons/fa";
import footerLogo from "../images/logo.jpg";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer-area">
          {/* <div className="footer-content">
            <a
              href="https://secure-pay.io/documents/whitepaper.pdf"
              target="_blank"
              className="whitepaper"
              rel="noreferrer"
            >
              
            </a>
          </div> */}
          <div className="footer-social-icons">
            <div className="social-icons text-center">
              <a href="/" target="_blank" rel="noreferrer" className="icons">
                {" "}
                <FaDiscord className="mx-3 my-3" size={30} />
              </a>
              <a href="/" target="_blank" rel="noreferrer" className="icons">
                {" "}
                <FaTwitter className="mx-3 my-3" size={30} />
              </a>
              <a href="/" target="_blank" rel="noreferrer" className="icons">
                {" "}
                <FaTelegramPlane className="mx-3 my-3" size={30} />
              </a>
              <a href="/" target="_blank" rel="noreferrer" className="icons">
                {" "}
                <FaInstagramSquare className="mx-3 my-3" size={30} />
              </a>
              <a href="/" target="_blank" rel="noreferrer" className="icons">
                {" "}
                <FaMedium className="mx-3 my-3" size={30} />
              </a>
            </div>
          </div>
          <div className="footer-email">
            {<img src={footerLogo} alt="" className="footerImg" />}
            <a href="/" className="email">
              hello@GenesisFinance.inf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
