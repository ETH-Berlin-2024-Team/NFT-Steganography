"use client";
import {
  ThirdwebProvider,
  metamaskWallet,
  ConnectWallet,
  Web3Button,
  useMintNFT,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/mint">
        <button>Go to Mint</button>
      </Link>
    </main>
  );
}
