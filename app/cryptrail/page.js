import React from 'react';
import "./block.css"

const page = () => {
  return (
  <>
  
  <div className="hero">
        <h1>TOP BLOCKCHAIN EXPLORERS</h1>
        <h2>Keeping an eye on On-Chain Transaction </h2>
    </div>


    <div className="explorer" id="explorer">
        <h2>Available Blockchains</h2>
        <div className="blockchain">
            <div className="blockchain-item solana">
                <h3>Solana</h3>
                <p><a href="https://solscan.io" target="_blank" rel="noopener noreferrer">View on Solscan</a></p>
            </div>
            <div className="blockchain-item ethereum">
                <h3>Ethereum</h3>
                <p><a href="https://etherscan.io" target="_blank" rel="noopener noreferrer">View on Etherscan</a></p>
            </div>
            <div className="blockchain-item ton">
                <h3>TON</h3>
                <p><a href="https://tonscan.org" target="_blank" rel="noopener noreferrer">View on TonScan</a></p>
            </div>
            <div className="blockchain-item cardano">
                <h3>Cardano</h3>
                <p><a href="https://cardanoscan.io" target="_blank" rel="noopener noreferrer">View on CardanoScan</a></p>
            </div>
        </div>
    </div>
  </>
  );
}

export default page;
