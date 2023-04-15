import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlockTransactions } from "../network/Network.js";
import "./styles.css"; // Import the styles.css file

import { ethers } from "ethers";

import axios from "axios";

const BlockTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { blockNumber } = useParams();

  useEffect(() => {
    getTransactions();
  }, [blockNumber]);

  async function getTransactions() {
    const txs = await getBlockTransactions(blockNumber);
    setTransactions(txs);
  }

  const formatNumber = (num) => {
    if (num === undefined) return "";
    return parseInt(num, 16);
  };

  return (
    <div className="table-container">
      <table className="block-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Near map: ", transactions)}
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.hash}</td>
              <td>{tx.from}</td>
              <td>{tx.to}</td>
              <td>{formatNumber(tx.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlockTransactions;
