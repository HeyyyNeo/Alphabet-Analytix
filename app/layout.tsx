import "./globals.css";
import type { Metadata } from "next";
import WithThemeLayout from "./theme";

export const metadata: Metadata = {
  title: "Alphabet Analytics",
  description: "Analytics software to manage students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="root">
        <WithThemeLayout>{children}</WithThemeLayout>
      </body>
    </html>
  );
}
