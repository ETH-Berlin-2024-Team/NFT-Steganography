"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <ConnectWallet />
    </div>
  );
}
