"use client";
import { Web3Button, useContract, useLazyMint } from "@thirdweb-dev/react";
import React from "react";

export default function page() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_NFTDROP_CONTRACT || ""
  );
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  return (
    <div className="flex items-center justify-center h-96">
      <Web3Button
        contractAddress={process.env.NEXT_PUBLIC_NFTDROP_CONTRACT || ""}
        action={() =>
          lazyMint({
            metadatas: [
              {
                name: "When life gets weird",
                description:
                  "Get ready to peel out. In a world where clocks melt and fruits fly. Grab it before it skates away!",
                image:
                  "https://raw.githubusercontent.com/ETH-Berlin-2024-Team/NFT-Steganography/main/banana.webp",
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
