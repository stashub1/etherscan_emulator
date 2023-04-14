import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlockTransactions } from "../network/Network.js";

import { ethers } from "ethers";

import axios from "axios";

const BlockTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { blockNumber } = useParams();

  useEffect(() => {
    const txs = getBlockTransactions(blockNumber);
    setTransactions(txs);
  }, [blockNumber]);

  const formatNumber = (num) => {
    if (num === undefined) return "";
    return parseInt(num, 16);
  };

  return (
    <div className="table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* {
            transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.hash}</td>
                <td>{tx.from}</td>
                <td>{tx.to}</td>
                <td>{formatNumber(tx.value)}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default BlockTransactions;
