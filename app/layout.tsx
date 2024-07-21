import "./globals.css";
import type { Metadata } from "next";
import WithThemeLayout from "./theme";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Alphabet Analytix",
  description: "Analytics software to manage students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.alphabetanalytix.com/" />
      </head>
      <body className="root">
        <WithThemeLayout>{children}</WithThemeLayout>
      </body>
    </html>
  );
}
