'use client'

import type { Metadata } from "next";
import Head from "next/head";  // Import Head to use for the page metadata

import "./globals.css";
import DelayedLoadingWrapper from "./components/DelayedLoadingWrapper";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "./components/Footer";

const metadata: Metadata = {
  title: "Idle Ones",
  description: "Hall of Shame", // Ensure this is a string or undefined
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure metadata.title is always a string
  const title = typeof metadata.title === 'string' ? metadata.title : 'Default Title';

  // Ensure metadata.description is a string or undefined
  const description = typeof metadata.description === 'string' ? metadata.description : undefined;

  return (
    <html lang="en">
      <body>
        <DelayedLoadingWrapper>
          <Suspense fallback={<Loading />}>
            <video
              src="/bgvid.mp4"
              className="fixed top-0 left-0 w-full h-full object-cover -z-40 object-left"
              autoPlay
              muted
              loop
            />
            <div className="bg-black w-screen h-screen fixed -z-30 opacity-30"></div>
            {/* Use Head to apply metadata */}
            <Head>
              <title>{title}</title>
              {description && <meta name="description" content={description} />}
            </Head>
            {children}
            <Footer />
          </Suspense>
        </DelayedLoadingWrapper>
      </body>
    </html>
  );
}
