import { FC } from "react";
import Image from "next/image";

const Welcome: FC = () => {
  return (
    <section className="max-w-screen-2xl flex flex-col lg:flex-row py-16 xl:py-24 px-16 items-center mx-auto lg:space-x-24">
      <div className="flex flex-col items-center max-w-3xl text-center font-serif">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl space-y-4 tracking-wider">
          <div>Witajcie!</div>
          <div>Cieszę się, że tu jesteście!</div>
        </h1>
        <p className="text-base sm:text-xl xl:text-2xl mt-12 xl:mt-20 text-slate-600">
          Wsparcie, bezpieczeństwo, zaufanie, pozytywna energia - tego możesz tutaj doświadczyć. Jestem po to, abyście mieli kogoś kto Was będzie wspierał na
          całym etapie organizacji, od początku do końca.
        </p>
        <p className="text-base mt-4 sm:text-xl xl:text-2xl text-slate-600">Dajcie sobie pomóc, aby ten dzień był niezapomniany!</p>
        <span className="font-mono text-2xl sm:text-4xl mt-10 self-end">Magda Grajek-Antonowicz</span>
      </div>
      <div
        className="relative shrink-0 w-full h-full aspect-[3/4] sm:w-[500px] sm:h-[620px] mt-20 xl:mt-0"
        style={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image src={"/images/powitanie-2.jpg"} alt="zdjęcie-powitalne" fill className="object-cover object-top" />
        <div className="h-full sm:h-[500px] w-full bg-beige -ml-10 -mt-10 absolute -z-10"></div>
        <div className="h-full sm:h-[500px] w-full bg-beige bottom-0 ml-10 -mb-10 absolute -z-10 "></div>
      </div>
    </section>
  );
};

export default Welcome;
