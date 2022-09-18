import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import MyStake from "./components/Pages/MyStake";
import Staking from "./components/Staking";
import {
  WalletConnect,
  MetaMasklogin,
  DissconnectWallet,
  getUserAddress,
  GetChainId,
} from "./components/Web3/Wallets";

function App() {
  const [user, setUser] = useState();
  const [account, setAccount] = useState("");

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        await Metamask();
      }
      const id = await GetChainId();
      console.log(id);
      if (Number(id) != 56) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }], // chainId must be in hexadecimal numbers
        });
      }
    };

    init();
  }, []);

  const WalletC = async () => {
    await WalletConnect();
    const add = await getUserAddress();
    setAccount(add);
    setUser(add);
  };

  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    window.localStorage.setItem("wallet", "wallet");
    setAccount(add);
    setUser(add);
  };
  const Dissconnect = async () => {
    await DissconnectWallet();
    setAccount(undefined);
    setUser(undefined);
    window.localStorage.removeItem("wallet");
  };

  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      setUser(accounts[0]);
    });
  } catch (error) {}

  try {
    window.ethereum.on("chainChanged", function (accounts) {
      window.location.reload();
    });
  } catch (error) {}

  return (
    <div className="App">
      <Router>
        <Navbar
          WalletC={WalletC}
          Metamask={Metamask}
          user={user}
          account={account}
          Dissconnect={Dissconnect}
        />
        <Staking />
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route exact path="/my-stake" element={<MyStake user={user} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
