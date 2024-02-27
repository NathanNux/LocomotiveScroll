import Head from 'next/head';
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Centrum Locomotive Scroll",
  description: "Locomotive scroll landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}