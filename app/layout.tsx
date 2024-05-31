import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snapchat: Share the moment",
  description:
    "Chat, send Snaps, explore Stories & Lenses on desktop, or download the app for mobile! Connect & create with friends, wherever you are.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
