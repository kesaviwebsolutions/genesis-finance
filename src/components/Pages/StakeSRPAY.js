import React, { useState, useEffect } from "react";
import StakingSubmission from "../StakingSubmission";
import { totalstakedinContract, tokenpending, tokenDistribute } from "./../Web3/Wallets";
import "../../App.css";
export default function StakeSRPAY({ user }) {
  const [stakeTotal, setStakeTotal] = useState(0);
  const [pending, setPending] = useState(0)
  const [disturbute, setDisturbute] = useState(0)

  useEffect(() => {
    const init = async () => {
      await getTotalStake();

    };
    init();
  }, [user]);

  const getTotalStake = async () => {
    const data = await totalstakedinContract();
    setStakeTotal(data);
    const pend = await tokenpending();
    setPending(pend)
    const dis = await tokenDistribute();
    setDisturbute(dis)
  };

  return (
    <div>
      <div className="container">
        <div className="srpay">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="card card-area">
                <div className="card-body">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Token Staked</h6>
                    <p className="srpay-count">
                      {isNaN(stakeTotal) ? "0" : Number(stakeTotal).toFixed(0)}{" "}
                      SRPAY
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card card-area2">
                <div className="card-body content">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Reward Distributed </h6>
                    <p className="srpay-count">{Number(disturbute).toFixed(3)} SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card card-area2">
                <div className="card-body content">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Reward Pending </h6>
                    <p className="srpay-count">{Number(pending).toFixed(3)} SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StakingSubmission getTotalStake={getTotalStake} user={user} />
        </div>
      </div>
    </div>
  );
}
