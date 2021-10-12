import logo from './logo.svg';
import { useState } from 'react';
import { ethers } from 'ethers';
import MsgNFT from './artifacts/contracts/MessageNFT.sol/MessageMeNFT.json';
import './App.css';

const msgAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  

  const [greeting, setGreetingValue] = useState('')

  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts' })
  }

  async function ClaimNFT() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(msgAddress, MsgNFT.abi, signer)
      const transaction = await contract.claimToken()
      // await transaction.wait()
      // const data = await contract.tokenURI(1001)
      // console.log('data: ', transaction)
      // try {
      //   const data = await contract
      //   console.log('data: ', data)
      // } catch (err) {
      //   console.log("Error: ", err)
      // }
    }
  }

  async function getMSGTokenURI() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(msgAddress, MsgNFT.abi, provider)
      try {
        const data = await contract.tokenURI(1)
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    } 
  }

  async function getMessageFromUser() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(msgAddress, MsgNFT.abi, provider)
      try {
        const data = await contract.getMessageFromUser('0x9013C8A1f0073269DaEc5e9dfcDd16AB66ff96c7');
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    } 
  }

  // async function ClaimOwnerxxxNFT() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(xxxLootAddress, xxxLoot.abi, signer)
  //     const transaction = await contract.ownerClaim(7778)
  //     // await transaction.wait()
  //     // const data = await contract.tokenURI(1001)
  //     // console.log('data: ', transaction)
  //     // try {
  //     //   const data = await contract
  //     //   console.log('data: ', data)
  //     // } catch (err) {
  //     //   console.log("Error: ", err)
  //     // }
  //   }
  // }

  // async function ClaimxxxNFT() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(xxxLootAddress, xxxLoot.abi, signer)
  //     const transaction = await contract.claim(1004)
  //     // await transaction.wait()
  //     // const data = await contract.tokenURI(1001)
  //     // console.log('data: ', transaction)
  //     // try {
  //     //   const data = await contract
  //     //   console.log('data: ', data)
  //     // } catch (err) {
  //     //   console.log("Error: ", err)
  //     // }
  //   }
  // }

  // async function SeexxxNFT() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const contract = new ethers.Contract(xxxLootAddress, xxxLoot.abi, provider)
  //     try {
  //       const data = await contract.tokenURI(1002)
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log("Error: ", err)
  //     }
  //   }   
  // }

  // async function TestLootBattles() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     // const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     // const contract = new ethers.Contract(lootBattlesAddress, LootBattles.abi, provider)
  //     let utils = ethers.utils;
  //     let filter = {
  //       address: lootBattlesAddress,
  //       topics: [
  //         utils.id("Battled(uint256,uint256,uint256)")
  //       ]
  //     }

  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     provider.on(filter, (attacker, defender, winner) => {
  //       console.log(attacker, defender, winner)
  //     })
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(lootBattlesAddress, LootBattles.abi, signer)
  //     const transaction = await contract.Battle(1002, 1004)
  //     await transaction.wait()
  //     console.log('data: ', transaction.value)
  //     // try {
  //     //   const data = await contract.Battle(1001, 1002)
  //     //   console.log('data: ', data)
  //     // } catch (err) {
  //     //   console.log("Error: ", err)
  //     // }
  //   }
  // }

  // async function SeeBattleHistory() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const contract = new ethers.Contract(lootBattlesAddress, LootBattles.abi, provider)
  //     try {
  //       const data = await contract.GetBattleStories()
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log("Error: ", err)
  //     }
  //   }   
  // }

  // async function CheckOwnerOfXXX() {
  //   if (typeof window.ethereum !== 'undefined') {
  //         const provider = new ethers.providers.Web3Provider(window.ethereum)
  //         const contract = new ethers.Contract(xxxLootAddress, xxxLoot.abi, provider)
  //         try {
  //           const data = await contract.ownerOf(7778)
  //           console.log('data: ', data)
  //         } catch (err) {
  //           console.log("Error: ", err)
  //         }
  //   }
  // }

  // async function SeeWins() {
  //   if (typeof window.ethereum !== 'undefined') {
  //         const provider = new ethers.providers.Web3Provider(window.ethereum)
  //         const contract = new ethers.Contract(lootBattlesAddress, LootBattles.abi, provider)
  //         try {
  //           const data = await contract.GetWins()
  //           console.log('data: ', data)
  //         } catch (err) {
  //           console.log("Error: ", err)
  //         }
  //   }
  // }

  // async function SeeLosses() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const contract = new ethers.Contract(lootBattlesAddress, LootBattles.abi, provider)
  //     try {
  //       const data = await contract.GetLosses()
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log("Error: ", err)
  //     }
  //   }
  // }

  // async function fetchGreeting() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
  //     try {
  //       const data = await contract.greet()
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log("Error: ", err)
  //     }
  //   }
  // }

  // async function setGreeting() {
  //   if (!greeting) return
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
  //     const transaction = await contract.setGreeting(greeting)
  //     setGreetingValue('')
  //     await transaction.wait()
  //     fetchGreeting()
  //   }
  // }

  async function setMsg() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(msgAddress, MsgNFT.abi, signer)
      const transaction = await contract.writeFree('0x9013C8A1f0073269DaEc5e9dfcDd16AB66ff96c7', greeting)
      setGreetingValue('')
      await transaction.wait()
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ClaimNFT}>Claim NFT</button>
        <button onClick={requestAccount}>Connect Web3</button>
        <button onClick={getMessageFromUser}>See msg</button>
        <button onClick={getMSGTokenURI}>GetMsgDataTokenURI</button>
        <button onClick={setMsg}>Set MSG</button>
        <input
          onChange={e => setGreetingValue(e.target.value)}
          placeholder="Set Greeting"
          value={greeting}
        />
      </header>
    </div>
  );
}

export default App;
