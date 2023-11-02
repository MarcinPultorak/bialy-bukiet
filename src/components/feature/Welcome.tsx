import { FC } from "react";
import Image from "next/image";

const Welcome: FC = () => {
  return (
    <section className="max-w-screen-2xl flex py-24 px-20 items-center mx-auto space-x-24">
      <div className="flex flex-col items-center max-w-3xl text-2xl text-center">
        <h1 className="text-5xl">Witajcie! Cieszę się że tu jesteście!</h1>
        <p className="mt-20">
          Wsparcie, bezpieczeństwo, zaufanie, pozytywna energia, tego możesz
          tutaj doświadczyć. Jestem po to abyście mieli kogoś kto Was będzie
          wspierał na całym etapie organizacji, od początku do końca.
        </p>
        <p className="mt-4">
          Dajcie sobie pomóc aby ten dzień był niezapomniany!
        </p>
        <span className="font-mono text-4xl mt-10 self-end">
          Magda Grajek-Antonowicz
        </span>
      </div>
      <div
        className="relative  w-[500px] h-[620px] "
        style={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={"/images/powitanie.jpg"}
          alt="zdjęcie-powitalne"
          fill
          className="object-cover"
        />
        <div className="h-[500px] w-full bg-beige -ml-10 -mt-10 absolute -z-10"></div>
        <div className="h-[500px] w-full bg-beige bottom-0 ml-10 -mb-10 absolute -z-10 "></div>
      </div>
    </section>
  );
};

export default Welcome;
