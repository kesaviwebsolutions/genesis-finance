import React from "react";
import StakeSRPAY from "./StakeSRPAY";
import "../../App.css";
export default function Home({user}) {
  return (
    <div>
      <StakeSRPAY user={user}/>
    </div>
  );
}
