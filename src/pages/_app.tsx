import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Crimson_Pro, Dynalight } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      className={`${crimsonPro.variable} ${dynalight.variable} font-sans`}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
