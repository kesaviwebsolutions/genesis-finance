import React, { useState, useEffect } from "react";
import StakingSubmission from "../StakingSubmission";

import {
  totalstakedinContract,
  tokenpending,
  tokenDistribute,
} from "./../Web3/Wallets";
import "../../App.css";
export default function StakeSRPAY({ user }) {
  const [stakeTotal, setStakeTotal] = useState(0);
  const [pending, setPending] = useState(0);
  const [disturbute, setDisturbute] = useState(0);

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
    setPending(pend);
    const dis = await tokenDistribute();
    setDisturbute(dis);
  };

  useEffect(() => {
    const init = async () => {
      await getTotalStake();
    };
    init();
  }, [user]);

  return (
    <div>
      <div className="container">
        <div className="border-meta">
          <div className="row total ">
<<<<<<< HEAD
       
     
        
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 section1a section1b">
                  <span
                    style={{
                      color: "#000",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Total Token Staked
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    {stakeTotal} GENESIS
                  </span>
                </div>
          
       
            <hr style={{ color: "white", marginTop: "1rem" }} />
      

            
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 section1a section1b">
                  <span
                    style={{
                      color: "#000",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Total Reward Distributed
                  </span>
                  <br />
                  <span style={{ color: "#000", fontSize: "18px" }}>
                    {" "}
                    {disturbute} GENESIS
                  </span>
                </div>
          
      
=======
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 section1a section1b">
              <span
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Total Token Staked
              </span>
              <br />
              <span
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                $0.00 GEFI 
              </span>
            </div>

>>>>>>> 0d23f58bc7279cfcf92d5c97f894a6c09d5ee1f5
            <hr style={{ color: "white", marginTop: "1rem" }} />

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 section1a section1b">
              <span
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Total Reward Distributed
              </span>
              <br />
              <span style={{ color: "#000", fontSize: "18px" }}>
                {" "}
                $0.00 GEFI 
              </span>
            </div>

            <hr style={{ color: "white", marginTop: "1rem" }} />

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 section1b ">
<<<<<<< HEAD
                  <span
                    style={{
                      color: "#000",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Total Reward Pending
                  </span>
                  <br />
                  <span style={{ color: "#000", fontSize: "18px" }}>
                    {" "}
                    {pending} GENESIS
                  </span>
                </div>
        
     
=======
              <span
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Total Reward Pending
              </span>
              <br />
              <span style={{ color: "#000", fontSize: "18px" }}>
                {" "}
                $0.00 GEFI 
              </span>
            </div>
>>>>>>> 0d23f58bc7279cfcf92d5c97f894a6c09d5ee1f5
          </div>
        </div>
      </div>
      <StakingSubmission getTotalStake={getTotalStake} user={user} />
    </div>
  );
}
