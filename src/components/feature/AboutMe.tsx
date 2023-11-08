import { FC } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const AboutMe: FC = () => {
  const isMobile = useIsMobile(1280);

  return (
    <section className="relative mt-20 xl:mt-10">
      {isMobile ? (
        <h2 className="text-xl md:text-2xl xl:text-3xl tracking-wider uppercase text-center pt-10">
          Kilka słów o mnie{" "}
        </h2>
      ) : null}
      <div className="w-1/2 aspect-square lg:w-[500px] lg:h-[500px] bg-beige absolute top-0 right-0 -z-20" />
      <div className="w-1/2 aspect-square lg:w-[500px] lg:h-[500px] bg-beige absolute bottom-0 left-0 -z-20"></div>
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row px-8 md:px-14 py-12 sm:py-20 items-center">
        <div className="relative h-full w-full aspect-[4/5] max-w-[640px]">
          <Image
            src={"/images/o-mnie2.jpeg"}
            alt="o-mnie"
            fill
            className="object-cover px-8 sm:px-12 md:px-0"
          />
        </div>
        <div className="max-w-4xl flex flex-col items-center lg:-ml-40 -mt-[40%] sm:-mt-80 md:-mt-[300px] lg:-mt-0 xl:-ml-24 lg:-mb-36">
          {!isMobile ? (
            <h2 className="text-3xl tracking-widest uppercase">
              Kilka słów o mnie{" "}
            </h2>
          ) : null}
          <div
            className="px-7 sm:px-14 py-8 sm:py-12 lg:py-20 max-w-4xl text-slate-600 text-sm md:text-base xl:text-lg text-justify lg:mt-20 z-20 "
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              background: "#fff",
            }}
          >
            <p>
              Mam na imię Magda i bez wątpienia moje mocne strony to
              zaangażowanie, pasja, kreatywność, wrodzona empatia,
              komunikatywność, chęć pomocy. Te i inne moje cechy sprawią że bez
              wątpienia będziecie czuć się zaopiekowani.
            </p>
            <p className="mt-4">
              Śluby od zawsze mnie wzruszały i pisząc to uświadomiłam sobie na
              jak wielu ślubach byłam obecna albo jako gość albo jako osoba
              towarzysząca… przypadek… nie sądzę 😉
            </p>
            <p className="mt-4">
              Wszystko zaczęło się od własnego ślubu i całej organizacji. Wtedy
              doświadczyłam jaki to jest ogrom poświęconego czasu i pracy… ale
              jaka to była dla mnie frajda 🙂
            </p>
            <p className="mt-4">
              Swoją przygodę zaczęłam od dekoracji ślubów i innych uroczystości
              co doprowadziło mnie do organizacji i to jest właśnie to!
              Koordynacja dnia ślubu jest wisienką na torcie, zwieńczeniem
              wielomiesięcznej współpracy z Parą Młodą, podwykonawcami.
              Spędzonych wiele godzin przed komputerem, dziesiątki maili i
              telefonów. Dzień ślubu jest dla mnie mieszanką emocji, ekscytacji,
              lekkiego poddenerwowania, adrenaliny, pozytywnej energii. Takie to
              uzależniające trochę.🙂
            </p>
            <p className="mt-4">
              {" "}
              Prywatnie żona, mama, posiadaczka 3 koni i psa.🙂
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
