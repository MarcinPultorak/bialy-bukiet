import { FC } from "react";
import Image from "next/image";

const AboutMe: FC = () => {
  return (
    <section className="relative mt-10">
      <div className="w-[500px] h-[500px] bg-beige absolute top-0 right-0 -z-20"></div>
      <div className="w-[500px] h-[500px] bg-beige absolute bottom-0 left-0 -z-20"></div>
      <div className="max-w-screen-2xl mx-auto flex px-14 py-20 items-center mb-40">
        <div className="relative h-[700px] w-[600px]">
          <Image src={"/images/o-mnie.jpg"} alt="o-mnie" fill className="object-cover" />
        </div>
        <div className="max-w-4xl flex flex-col items-center -ml-24 -mb-36">
          <h2 className="text-5xl uppercase -ml-32">Kilka słów o mnie </h2>
          <div
            className="px-14 py-20 max-w-4xl text-lg text-justify mt-24 z-20 "
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              background: "#fff",
            }}
          >
            <p>
              Mam na imię Magda i bez wątpienia moje mocne strony to zaangażowanie, pasja, kreatywność, wrodzona empatia, komunikatywność, chęć pomocy. Te i
              inne moje cechy sprawią że bez wątpienia będziecie czuć się zaopiekowani.
            </p>
            <p className="mt-4">
              Śluby od zawsze mnie wzruszały i pisząc to uświadomiłam sobie na jak wielu ślubach byłam obecna albo jako gość albo jako osoba towarzysząca…
              przypadek… nie sądzę 😉
            </p>
            <p className="mt-4">
              Wszystko zaczęło się od własnego ślubu i całej organizacji. Wtedy doświadczyłam jaki to jest ogrom poświęconego czasu i pracy… ale jaka to była
              dla mnie frajda 🙂
            </p>
            <p className="mt-4">
              Swoją przygodę zaczęłam od dekoracji ślubów i innych uroczystości co doprowadziło mnie do organizacji i to jest właśnie to! Koordynacja dnia ślubu
              jest wisienką na torcie, zwieńczeniem wielomiesięcznej współpracy z Parą Młodą, podwykonawcami. Spędzonych wiele godzin przed komputerem,
              dziesiątki maili i telefonów. Dzień ślubu jest dla mnie mieszanką emocji, ekscytacji, lekkiego poddenerwowania, adrenaliny, pozytywnej energii.
              Takie to uzależniające trochę.🙂
            </p>
            <p className="mt-4"> Prywatnie żona, mama, posiadaczka 3 koni i psa.🙂</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
