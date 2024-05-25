"use client";
import {
  ThirdwebProvider,
  metamaskWallet,
  ConnectWallet,
} from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThirdwebProvider
        activeChain={"sepolia"}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || ""}
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
        ]}
      >
        <ConnectWallet />
        <p>TEST</p>
      </ThirdwebProvider>
    </main>
  );
}
