import React from 'react';

const Trail = () => {
  return (
    <div className="container">
    <h1>CryptTrail - P2P Money Trail </h1>

 
    <div className="section">
        <h2>Submit Transaction</h2>
        <input type="text" id="sender" placeholder="Sender"/>
        <input type="text" id="recipient" placeholder="Recipient"/>
        <input type="number" id="amount" placeholder="Amount"/>
        <button >Submit Transaction</button>
        <div id="message" className="message"></div>
    </div>


    <div className="section">
        <h2>Get User Transactions</h2>
        <input type="text" id="userAddress" placeholder="User Address"/>
        <button >Get Transactions</button>
        <div id="userTransactions"></div>
    </div>

    <div className="section">
        <h2>Blockchain</h2>
        <button >Get Blockchain</button>
        <div id="chain"></div>
    </div>


    <div className="section">
        <h2>Mempool</h2>
        <button >Get Mempool</button>
        <div id="mempool"></div>
    </div>

   
    <div className="section">
        <h2>Mine Block</h2>
        <button >Mine New Block</button>
    </div>
</div>
  );
}

export default Trail;
