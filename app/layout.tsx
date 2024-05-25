"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ConnectWallet,
  ThirdwebProvider,
  metamaskWallet,
} from "@thirdweb-dev/react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThirdwebProvider
        activeChain={"sepolia"}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || ""}
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
        ]}
      >
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ThirdwebProvider>
    </html>
  );
}
