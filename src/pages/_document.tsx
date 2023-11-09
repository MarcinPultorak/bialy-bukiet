import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl" className="scroll-smooth">
      <Head>
        <title>
          Biały Bukiet Wedding Planner - Profesjonalna Organizacja Ślubów
        </title>
        <meta
          name="description"
          content="Zaufaj Białemu Bukietowi - Twój Wedding Planner oferujący kompleksową organizację ślubów, dekoracje sal oraz wypożyczalnię dekoracji na imprezy. Realizujemy marzenia o wymarzonym ślubie."
        />
        <meta
          name="keywords"
          content="organizacja ślubów, wedding planner, dekoracje sal, wypożyczalnia dekoracji, ślub w Polsce, profesjonalna obsługa ślubna, marzenie o ślubie, Kompleksowa organizacja dnia ślubu, Częściowa organizacja dnia ślubu, Koordynacja dnia ślubu, Dekoracje"
        />
        <meta name="author" content="Biały Bukiet Wedding Planner" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Biały Bukiet Wedding Planner" />
        <meta
          property="og:title"
          content="Biały Bukiet Wedding Planner - Profesjonalna Organizacja Ślubów"
        />
        <meta
          property="og:description"
          content="Zaufaj Białemu Bukietowi - Twój Wedding Planner oferujący kompleksową organizację ślubów, dekoracje sal oraz wypożyczalnię dekoracji na imprezy. Realizujemy marzenia o wymarzonym ślubie."
        ></meta>
        <meta property="og:url" content="awww.bialybukier.pl" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
