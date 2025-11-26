// pages/_app.js
import "../styles/products.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
