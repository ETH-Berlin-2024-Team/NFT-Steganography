"use client";
import { Web3Button, useContract, useLazyMint } from "@thirdweb-dev/react";
import React from "react";

export default function page() {
  const { contract } = useContract(
    "0xd697cbd817ba5d0da1a886080530528c567272b8"
  );
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  return (
    <div className="flex items-center justify-center h-96">
      <Web3Button
        contractAddress={"0xd697cbd817ba5d0da1a886080530528c567272b8"}
        action={() =>
          lazyMint({
            metadatas: [
              {
                name: "When life gets weird",
                description:
                  "Get ready to peel out. In a world where clocks melt and fruits fly. Grab it before it skates away!",
                image:
                  "https://github.com/ETH-Berlin-2024-Team/NFT-Steganography/blob/main/banana.webp",
              },
            ],
          })
        }
      >
        Lazy Mint NFTs
      </Web3Button>
    </div>
  );
}
