import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300"],
});

const fira_code = Fira_Code({
  variable: "--font-fira_code",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Graphql Playground",
  description:
    "Graphql Playground is an open source project that demonstrates how Graphql works in production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fira_code.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
