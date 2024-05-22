"use client";

import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const PayButton = () => {
  async function pay(e: any) {
    if (typeof window.ethereum !== "undefined") {
      try {
        e.preventDefault();
        console.log("pay clicked");
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const transactionRequest = {
          to: "0x0095635fe37bf7aeab21b18dd3a743fb436d2f7b",
          value: ethers.parseEther("0.0001"),
        };

        const receipt = await signer.sendTransaction(transactionRequest);
        console.log(receipt);
      } catch (error) {
        console.error("Transaction failed:", error);
      }
    } else {
      console.error("MetaMask is not installed");
    }
  }
  return <button onClick={(e) => pay(e)}>pay</button>;
};

export default PayButton;
