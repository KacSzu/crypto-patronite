"use client";

import { ethers } from "ethers";
import { CiHeart } from "react-icons/ci";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

declare global {
  interface Window {
    ethereum: any;
  }
}
interface IPayButton {
  toWallet: string;
}
const PayButton = ({ toWallet }: IPayButton) => {
  async function pay(e: any) {
    if (typeof window.ethereum !== "undefined") {
      try {
        e.preventDefault();
        console.log("pay clicked");
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const transactionRequest = {
          to: toWallet,
          value: ethers.parseEther("0.0001"),
        };
        const receipt = await signer.sendTransaction(transactionRequest);
        toast.success("Successfully donated your favourite artist");
        console.log(receipt);
      } catch (error) {
        toast.error("Transaction failed.");
        console.error("Transaction failed:", error);
      }
    } else {
      toast.error("Metamask is not installed");
      console.error("MetaMask is not installed");
    }
  }
  return (
    <Button
      className="text-base bg-red-200 border-red-300 border hover:bg-red-300 text-black   space-x-3"
      onClick={(e) => pay(e)}
    >
      <span className="text-xl bg">
        <CiHeart />
      </span>
      <span>Donate</span>
    </Button>
  );
};

export default PayButton;
