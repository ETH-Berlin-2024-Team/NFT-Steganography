"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import {
  ConnectWallet,
  ThirdwebProvider,
  metamaskWallet,
} from "@thirdweb-dev/react";
import { Navbar } from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
const activeChain = "sepolia";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          activeChain={activeChain}
          clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || ""}
          supportedWallets={[
            metamaskWallet({
              recommended: true,
            }),
          ]}
        >
          <ChakraProvider>
            <Navbar />
            {children}
          </ChakraProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
