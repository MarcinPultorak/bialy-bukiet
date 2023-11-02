import { FC } from "react";
import Image from "next/image";
import { Parallax } from "react-parallax";

const Offer: FC = () => {
  return (
    <>
      <section className="">
        <Parallax strength={600} bgImage="/images/offer-bg2.png">
          <div
            className="w-full h-[500px] relative flex items-center justify-center"
            style={{
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.25) 50.18%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          >
            {/* <Image
            src={"/images/offer-bg2.png"}
            alt="oferta-tło"
            fill
            className="object-cover -z-10"
          /> */}
            <h2 className="text-5xl text-white uppercase">Oferta</h2>
          </div>
        </Parallax>
        <div className="max-w-screen-2xl mx-auto pb-20">
          <h2 className="text-2xl max-w-4xl mx-auto text-center mt-20">
            Każda Para Młoda ma swoje potrzeby i swoją wizję wesela. I każda z
            Par ma się tego dnia czuć wyjątkowo, dlatego każda oferta jest
            przygotowywana indywidualnie.
          </h2>
          <div className="w-full px-10 grid grid-cols-3 mt-20">
            <div className="px-10">
              <div
                className="h-80 relative"
                style={{
                  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
                <Image
                  src={"/images/oferta1.jpg"}
                  alt="oferta1"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-yellow-700 text-2xl tracking-widest text-center mt-4">
                Kompleksowa organizacja dnia ślubu
              </h3>
              <div className="text-base text-center px-4 mt-4">
                <p>
                  Może macie mało czasu na organizację, może przebywacie za
                  granicą ale ślub ma się odbyć w Polsce, może zwyczajnie nie
                  macie głowy do takich spraw, nie wiecie nawet od czego zacząć
                  przygotowania. A może masz inne powody dla których potrzebne
                  Ci wsparcie.
                </p>
                <p className="mt-4">
                  Mówiąc o kompleksowej organizacji, mam na myśli pomoc przy
                  realizacji dnia ślubu od początku do końca, od A do Z.
                </p>

                <p className="mt-4 text-yellow-700">Więcej szczegółów...</p>
              </div>
            </div>
            <div className="px-10">
              <div
                className="h-80 relative"
                style={{
                  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
                <Image
                  src={"/images/oferta2.jpg"}
                  alt="oferta1"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-yellow-700 text-2xl tracking-widest text-center mt-4">
                Częściowa organizacja dnia ślubu
              </h3>
              <div className="text-base text-center px-4 mt-4">
                <p>
                  Tutaj przychodzę do Was z pomocą, jeżeli nie możecie sobie
                  poradzić z jaką częścią organizacji. Jeżeli utknęliście na
                  jakimś etapie, coś należy dopracować, lub pojawił się jakiś
                  problem. Szukacie podwykonawcy, obiektu, macie problem z
                  harmonogramem. Możecie się do mnie zwrócić z każdym pytaniem,
                  do czego zachęcam. Zawsze jesteście mile widziani
                </p>
              </div>
            </div>{" "}
            <div className="px-10">
              <div
                className="h-80 relative"
                style={{
                  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
                <Image
                  src={"/images/oferta3.jpg"}
                  alt="oferta1"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-yellow-700 text-2xl tracking-widest text-center mt-4">
                Koordynacja dnia ślubu
              </h3>
              <div className="text-base text-center px-4 mt-4">
                <p>
                  W przypadku kiedy macie już zorganizowany cały ślub i wesele,
                  jednak zależy Wam aby ktoś nad Wami czuwał tego dnia, nie
                  chcąc obarczać tym swoich bliskich, pomoc Wedding plannera
                  będzie doskonałym wyjściem. To jest jeden z najważniejszych
                  dni w życiu i warto go celebrować z najbliższymi, nie tracąc
                  czasu na samodzielne załatwianie spraw tego dnia.
                </p>
                <p className="mt-4 text-yellow-700">Więcej szczegółów...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
