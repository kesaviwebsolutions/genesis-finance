import Web3 from 'web3/dist/web3.min.js'
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import { StakingABI, StakingAddress, TokenABI, TokenAddress } from './Credentials'

let web3
var provider = new WalletConnectProvider({
  rpc: {
    56: 'https://bsc-dataseed1.ninicoin.io',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    1: 'https://mainnet.infura.io/v3/',
    // ...
  },
  bridge: 'https://bridge.walletconnect.org',
})

export const WalletConnect = async () => {
  try {
    await provider.disconnect()
    const data = await provider.enable()
    web3 = new Web3(provider)
  } catch (error) {
    console.log(error)
  }
}

export const DissconnectWallet = async () => {
  await provider.disconnect()
  web3 = null
}

export const MetaMasklogin = async () => {
  const data = await window.ethereum.enable()
  web3 = new Web3(window.ethereum)
  return data[0]
}

export const getUserAddress = async () => {
  try {
    const address = await web3.eth.getAccounts()
    return address[0]
  } catch (error) {
    console.log(error)
  }
}

export const getContract = async (abi, sAddress) => {
  try {
    const Contract = new web3.eth.Contract(abi, sAddress)
    return Contract
  } catch (error) {
    console.log(error)
  }
}

export const towie = async (amount) => {
  try {
    const number = await web3.utils.toWei(amount.toString(), 'ether')
    return number
  } catch (error) {
    console.log(error)
  }
}

export const GetChainId = async () => {
  try {
    const id = await web3.eth.getChainId()
    return id
  } catch (error) {}
}

export const Approve = async () => {
  try {
    const contract = new web3.eth.Contract(TokenABI, TokenAddress)
  const data = await contract.methods
    .approve(
      StakingAddress,
      115792089237316195423570985008687907853269984665640564039457584007913129639935n,
    )
    .send({ from: await getUserAddress() })
  return data
  } catch (error) {
    console.log(error)
  }
}
export const Allow = async()=>{
  try {
  const contract = new web3.eth.Contract(TokenABI, TokenAddress);
  const data = await contract.methods.allowance(await getUserAddress(), StakingAddress).call();
  return data;
  } catch (error) {
    console.log(error)
  }
}

export const Stake =async(du,amount)=> {
  try {
    const a = await towie(amount);
    console.log(a,du)
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const allow = await Allow();
    if(Number(allow) > 0){
      const data = await contract.methods.deposit(a,du).send({from:await getUserAddress()});
      return data;
    }
    else{
      await Approve();
      const data = await contract.methods.deposit(a,du).send({from:await getUserAddress()});
      return data;
    }
  } catch (error) {
    console.log(error)
  }
}

export const totalstakedinContract = async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.totalStake().call();
    return data/10**18;
  } catch (error) {
    
  }
}

export const tokenBalance = async()=>{
  try {
    const contract = new web3.eth.Contract(TokenABI, TokenAddress);
    const data = await contract.methods.balanceOf(await getUserAddress()).call();
    return data/10**18;
  } catch (error) {
    
  }
}

export const StakeBalace = async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.balanceOf(await getUserAddress()).call();
    console.log("MY STAKE",data)
    return data/10**18;
  } catch (error) {
    
  }
}

export const totakRewardEarned = async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.totalRewardEarn(await getUserAddress()).call();
    return data/10**18;
  } catch (error) {
    
  }
}

export const orderID = async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.investorOrderIds(await getUserAddress()).call();
    return data;
  } catch (error) {
  }
}
export const getDetails = async()=>{
  const events = []
  const contract = new web3.eth.Contract(StakingABI, StakingAddress);
  const ids = await orderID();
  console.log("ID array",ids)
  for(let i = 0; i < ids.length; i++){
    const id = ids[i]
    const event = await contract.methods.orders(id).call();
    event.id = id
    events.push(event)
  }
  return events;
};

export const unstake = async(id)=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.withdraw(id).send({from:await getUserAddress()});
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const pendingrewards = async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.withdraw(await getUserAddress()).call();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const emergencyaction = async(id)=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.emergencyWithdraw(id).send({from:await getUserAddress()});
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const balanceofstake = async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.balanceOf(await getUserAddress()).call();
    return data/10**18;
    } catch (error) {
    console.log(error)
  }
}

export const tokenpending =async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.totalRewardPending().call();
    return data/10**18;
    } catch (error) {
    console.log(error)
  }
}

export const tokenDistribute = async()=>{
  try {
    const contract = new web3.eth.Contract(StakingABI, StakingAddress);
    const data = await contract.methods.totalRewardsDistribution().call();
    return data/10**18;
    } catch (error) {
    console.log(error)
  }
}