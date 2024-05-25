"use client";
import { Web3Button, useContract, useLazyMint } from "@thirdweb-dev/react";
import React from "react";
import { NFT_DROP_ADDRESS } from "../const/addresses";

export default function Page() {
  const { contract } = useContract(NFT_DROP_ADDRESS);
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  return (
    <div className="flex items-center justify-center h-96">
      <Web3Button
        contractAddress={NFT_DROP_ADDRESS}
        action={() =>
          lazyMint({
            metadatas: [
              {
                name: "When life gets weird",
                description:
                  "Get ready to peel out. In a world where clocks melt and fruits fly. Grab it before it skates away!",
                image:
                  "https://github.com/ETH-Berlin-2024-Team/NFT-Steganography/blob/main/banana.webp?raw=true",
              },
            ],
          })
        }
      >
        {isLoading ? 'Minting...' : 'Lazy Mint NFTs'}
      </Web3Button>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </div>
  );
}
