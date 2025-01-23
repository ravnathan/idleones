'use client'

import type { Metadata } from "next";

import "./globals.css";
import DelayedLoadingWrapper from "./components/DelayedLoadingWrapper";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "./components/Footer";

const metadata: Metadata = {
  title: "Idle Ones",
  description: "Hall of Shame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DelayedLoadingWrapper>
          <Suspense fallback={<Loading/>}>
          <video src="/bgvid.mp4" className="fixed top-0 left-0 w-full h-full object-cover -z-40 object-left" autoPlay muted loop></video>
          <div className="bg-black w-screen h-screen fixed -z-30 opacity-30"></div>
          {children}
          <Footer/>
          </Suspense>
        </DelayedLoadingWrapper>
      </body>
    </html>
  );
}
