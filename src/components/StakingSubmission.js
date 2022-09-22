import React, { useState, useEffect } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import logo from "../images/logo.ico";
import toast, { Toaster } from "react-hot-toast";
import { Stake, tokenBalance, unstake, StakeBalace } from "./Web3/Wallets";
import "../App.css";
const notify = (msg) => toast.success(msg);
const time = new Date().getTime();

export default function StakingSubmission({ getTotalStake, user }) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(2);
  const [duration, setDuration] = useState(90);
  const [balance, setBalance] = useState(0);
  const [apy, setAPY] = useState(50);
  const [stakeTotal, setStakeTotal] = useState(0);

  useEffect(() => {
    const init = async () => {
      const bal = await tokenBalance();
      setBalance(bal);
      const ts = await StakeBalace();
      setStakeTotal(ts);
    };
    init();
  }, [user]);

  const StakeAmount = async () => {
    const data = await Stake(duration, count);
    if (data.status) {
      notify("Staked Successfully");
      await getTotalStake();
      const bal = await tokenBalance();
      setBalance(bal);
    }
  };

  console.log(duration * 86400);
  return (
    <div>
      <div className="container">
        <div className="staking-area">
          <div className="stakingsubmission">
            <h4 className="ss-heading">Staking Submission</h4>
          </div>
        </div>
        <div className="stakingsubmission-cards">
          <div className="row">
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${active == 1 ? "active" : ""}`}
                onClick={() => {
                  setActive(1);

                  setDuration(30);
                  setAPY(35);
                }}
              >
                <div className="card-body ss-text">
                  <h5 className="card-title styling">30 Days Lock</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    15% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${active == 2 ? "active" : ""}`}
                onClick={() => {
                  setActive(2);

                  setDuration(90);
                  setAPY(75);
                }}
              >
                {/* <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon" /> */}
                <div className="card-body ss-text">
                  <h5 className="card-title styling">90 Days Lock</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    45% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${active == 3 ? "active" : ""}`}
                onClick={() => {
                  setActive(3);

                  setDuration(180);
                  setAPY(90);
                }}
              >
                {/* <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon" /> */}
                <div className="card-body ss-text">
                  <h5 className="card-title styling">180 Days Lock</h5>

                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    135% APY
                  </h6>
                </div>
              </div>
            </div>
            <diyv className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${active == 4 ? "active" : ""}`}
                onClick={() => {
                  setActive(4);
                  setDuration(365);
                  setAPY(130);
                }}
              >
                {/* <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon" /> */}
                <div className="card-body ss-text">
                  <h5 className="card-title styling">365 Days Lock</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    200% APY
                  </h6>
                </div>
              </div>
            </diyv>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="staking-area">
          <div className="stakedsubmission my-5 py-2 position-relative">
          <div className="row" style={{margin:"0.5rem",marginBottom:"2rem"}}>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <h4 className="ss-heading">Input Amount:</h4></div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
             <div className="d-grid">
              <input
                type="number"
                placeholder="Enter amount"
                className="stakedAmount"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              {count < 0 || undefined ? (
                <p className="error-statement">
                  Amount must be greater than zero
                </p>
              ) : (
                ""
              )}
            </div></div></div>
            <div className="row" style={{margin:"0.5rem"}}>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
            <button className="stakenow"> STAKE NOW</button></div>
            </div>
          </div>
        
        </div>
        <div className="container">
          <div className="stake-summary-content">
            <div className="stake">
              <h4 className="srpayBalance">
                Your Balance : {balance} $GENESIS
              </h4>
            </div>
            <div className="stake">
              <h3 className="stakingSummary">Staking Details</h3>
            </div>
            <div className="stake">
              <div className="summary-content">
                <p>Duration</p>
                <p className="ssc4">:</p>
                <p className="sc">{duration} Days</p>
              </div>
              <div className="summary-content">
                <p>APY</p>
                <p className="ssc5">:</p>
                <p className="sc">{apy} %</p>
              </div>
              <div className="summary-content">
                <p>Staked Amount</p>
                <p className="ssc">:</p>
                <p className="sc">{count} $GENESIS </p>
              </div>
              <div className="summary-content">
                <p>Estimated Return</p>
                <p className="ssc2">:</p>
                <p className="sc">
                  {duration == 30
                    ? `${count * 1.0292}`
                    : duration == 90
                    ? `${count * 1.1875}`
                    : duration == 180
                    ? `${count * 1.45}`
                    : `${count * 2.3}`}{" "}
                  $GENESIS
                </p>
              </div>
              <div className="summary-content">
                <p>Start Date</p>
                <p className="ssc3">:</p>
                <p className="sc">{new Date().toLocaleString()}</p>
              </div>
              <div className="summary-content">
                <p>End Date</p>
                <p className="ssc4">:</p>
                <p className="sc">
                  {new Date(time + duration * 86400000).toLocaleString()}
                </p>
              </div>
            </div>
            {/* <button
              className="d-block m-auto stake-btton"
              onClick={() => {
                StakeAmount();
              }}
            >
              {" "}
              STAKE NOW
            </button>
            <br /> */}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
