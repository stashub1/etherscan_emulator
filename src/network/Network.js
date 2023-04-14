import axios from "axios";
import { API_KEY } from "../util/env.js";

export const API_URL = "https://api.etherscan.io/api";

export async function fetchBlockData(blockNumber) {
  let tag;
  if (blockNumber === "latest") {
    tag = "latest";
  } else {
    tag = `0x${blockNumber.toString(16)}`;
  }
  try {
    const response = await axios.get(API_URL, {
      params: {
        module: "proxy",
        action: "eth_getBlockByNumber",
        tag,
        boolean: true,
        apikey: API_KEY,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blockData = response.data.result;
    console.log("BlockData", blockData);
    let timestamp = null;
    if (blockData.timestamp) {
      timestamp = parseInt(blockData.timestamp, 16) * 1000;
    } else {
      timestamp = Date.now();
    }
    const transactions = blockData.transactions;
    const amount = transactions ? transactions.length : 0;
    return {
      number: parseInt(blockData.number, 16),
      timestamp,
      amount,
      hash: blockData.hash,
    };
  } catch (error) {
    console.log("Error");
    console.error(error);
    return null;
  }
}

export async function getBlockTransactions(blockNumber) {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber}&boolean=true&apikey=${API_KEY}`
    );
    const block = response.data.result;
    console.log("BlockL ", block);
    const txs = block.transactions;

    const formattedTxs = await Promise.all(
      txs.map(async (tx) => {
        console.log("Tx from: ", tx.from);
        console.log("Tx to: ", tx.to);
        //const from = await getContractType(tx.from);
        //const to = await getContractType(tx.to);
        return {
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          value: parseInt(tx.value, 16),
        };
      })
    );
    console.log("Formatted txs: ", formattedTxs);
  } catch (error) {
    console.error(error);
  }
}
