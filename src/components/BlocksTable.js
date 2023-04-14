import React, { useState, useEffect } from "react";
import { fetchBlockData } from "../network/Network.js";
import "./styles.css";

function BlocksTable() {
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [latestBlock, setLatestBlock] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);

  async function fetchLatestBlock() {
    try {
      const latestBlockResponse = await fetchBlockData("latest");
      console.log("latestBlockResponse", latestBlockResponse);
      setLatestBlock(latestBlockResponse);
      console.log("latestBlockResponse number: ", latestBlockResponse.number);
      setLatestBlocks((prevBlocks) => {
        if (
          !prevBlocks.some(
            (block) => block.number === latestBlockResponse.number
          )
        ) {
          // If it doesn't exist, add it to the array
          return [latestBlockResponse, ...prevBlocks];
        }
        return prevBlocks;
      });

      console.log("LatestBlocks length: ", latestBlocks.length);
      console.log("LatestBlocks: ", latestBlocks);
    } catch (error) {
      console.error(error);
    }
  }

  const handleBlockClick = (blockNumber) => {
    setSelectedBlock(blockNumber);
    window.open(`/block/${blockNumber}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchLatestBlock();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="table-container">
      <table className="block-table">
        <thead>
          <tr>
            <th>Block Number</th>
            <th>Timestamp</th>
            <th>Amount</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          {latestBlocks.map((block) => (
            <tr
              key={block.number}
              onClick={() => handleBlockClick(block.number)}
            >
              <td>{block.number}</td>
              <td>{new Date(block.timestamp).toLocaleString()}</td>
              <td>{block.amount}</td>
              <td>{block.hash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlocksTable;
