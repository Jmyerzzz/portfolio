import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jackson Myers",
  description: "Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
