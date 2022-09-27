import React, { useState, useEffect } from "react";
import spay from "../images/logo.jpg";
import meta from "../images/meta.png";
import connect from "../images/connect.svg";
import "../App.css";
export default function Navbar({
  WalletC,
  Metamask,
  user,
  account,
  Dissconnect,
}) {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  const sliceadd = (address) => {
    const first = address.slice(0, 4);
    const second = address.slice(38);
    return first + "..." + second;
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="/https://genesis-finance.net">
            <img src={spay} alt="" className="navLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills pills-area mx-auto mb-2 mb-lg-0">
              {/* <li
                className="nav-item"
                onClick={() => {
                  setActive(false);
                  setActive2(true);
                  setActive3(false);
                  setActive4(false);
                  setActive5(false);
                }}
              >
                <a
                  className={`nav-link ${active2 ? "active" : ""} item mx-1`}
                  aria-current="page"
                  href="https://secure-pay.io/index.html"
                  target="_blank"
                >
                  BACK TO MAIN WEBSITE
                </a>
              </li> */}
              <li
                className="nav-item"
                onClick={() => {
                  setActive(true);
                  setActive2(false);
                  setActive3(false);
                  setActive4(false);
                  setActive5(false);
                }}
              >
                <a
                  className={`nav-link ${active ? "active item" : ""} mx-1`}
                  target="_blank"
                  rel="noreferrer"
                  href="https://genesis-finance.net"
                >
                  Back to mainwebsite
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  setActive(true);
                  setActive2(false);
                  setActive3(false);
                  setActive4(false);
                  setActive5(false);
                }}
              >
                <a
                  className={`nav-link ${active ? "active item" : ""} mx-1`}
                  href="/"
                >
                  STAKING
                </a>
              </li>
              {/* <li
                className="nav-item"
                onClick={() => {
                  setActive(false);
                  setActive2(false);
                  setActive3(true);
                  setActive4(false);
                  setActive5(false);
                }}
              >
                <a
                  className={`nav-link ${active3 ? "active item" : ""} mx-1`}
                  href="https://secure-pay.io/index.html#roadmap"
                  target="_blank"
                >
                  ROADMAP
                </a>
              </li> */}
              {/* <li
                className="nav-item"
                onClick={() => {
                  setActive(false);
                  setActive2(false);
                  setActive3(false);
                  setActive4(true);
                  setActive5(false);
                }}
              >
                <a
                  className={`nav-link ${active4 ? "active item" : ""} mx-1`}
                  href="https://secure-pay.io/index.html#faqs"
                  target="_blank"
                >
                  FAQS
                </a>
              </li> */}
              {/* <li
                className="nav-item"
                onClick={() => {
                  setActive(false);
                  setActive2(false);
                  setActive3(false);
                  setActive4(false);
                  setActive5(true);
                }}
              >
                <a
                  className={`nav-link ${active5 ? "active item" : ""} mx-1`}
                  href="https://secure-pay.io/index.html#contact"
                  target="_blank"
                >
                  CONTACT
                </a>
              </li> */}
            </ul>
            {!user ? (
              <button
                type="button"
                className="btn mx-1 connect-btton"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="button123"
                style={{ marginRight: "1rem !important" }}
              >
                Connect Wallet
              </button>
            ) : (
              <div className="dropdown">
                <button
                  className="btn mx-1 connect-btton dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {sliceadd(user)}
                </button>
                <ul className="dropdown-menu background">
                  <li className="disconnect" onClick={() => Dissconnect()}>
                    Disconnect
                  </li>
                </ul>
              </div>
            )}
            <button
              type="button"
              className="btn mx-1 "
              d-block
              m-auto
              stake-btton
            >
              {" "}
              BUY $GEFI
            </button>
          </div>
        </div>
      </nav>
      {/* MODAL */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title ms-auto heading"
                id="exampleModalLabel"
              >
                Please Connect Your Wallet
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet-images">
                <img
                  src={meta}
                  alt=""
                  className="wi"
                  onClick={() => Metamask()}
                />
                <img
                  src={connect}
                  alt=""
                  className="wi"
                  onClick={() => WalletC()}
                />
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
