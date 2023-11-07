import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Crimson_Pro, Dynalight, Playfair_Display } from "next/font/google";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimsonPro",
});

const dynalight = Dynalight({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-dynalight",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      className={`${crimsonPro.variable} ${dynalight.variable} ${playfair.variable} font-serif`}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
