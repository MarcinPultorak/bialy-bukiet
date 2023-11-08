import { FC } from "react";
import Image from "next/image";
import Contact from "./Contact";

const Offer: FC = () => {
  return (
    <section>
      <div
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative flex items-center justify-center"
        style={{
          background: "linear-gradient(270deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.25) 50.18%, rgba(0, 0, 0, 0.00) 100%)",
        }}
      >
        <Image src={"/images/offer-bg2.png"} alt="oferta-tło" fill className="object-cover -z-10" />
        <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-widest">Oferta</h2>
      </div>
      <div className="max-w-screen-2xl mx-auto w-full h-full py-10 md:py-20 px-5">
        <div className="flex items-center sm:space-x-8 w-full xl:px-20">
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 max-w-[280px] w-full" />
          <h2 className="text-center sm:text-lg md:text-xl lg:text-2xl tracking-wider max-w-4xl">
            Każda Para Młoda ma swoje potrzeby i swoją wizję wesela. I każda z Par ma się tego dnia czuć wyjątkowo, dlatego każda oferta jest przygotowywana
            indywidualnie.
          </h2>
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 max-w-[280px] w-full" />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 lg:gap-x-5 mt-14 lg:mt-28">
          <div className="w-full h-[400px] lg:h-[635px] relative ">
            <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
            <Image src={"/images/oferta1.jpg"} alt="oferta1" fill className="object-cover" />
          </div>
          <div
            className="w-full lg:max-w-[710px] p-5 sm:p-7 lg:p-9 bg-beige"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className="sm:text-lg md:text-xl lg:text-2xl text-center text-yellow-700 tracking-wider">Kompleksowa organizacja dnia ślubu</h2>
            <div className="mt-6 lg:mt-12 text-slate-600 text-xs sm:text-sm lg:text-base">
              <p>
                Może macie mało czasu na organizację, może przebywacie za granicą, ale ślub ma się odbyć w Polsce, może zwyczajnie nie macie głowy do takich
                spraw, nie wiecie nawet od czego zacząć przygotowania. A może masz inne powody dla których potrzebne Ci wsparcie.
              </p>
              <p className="mt-4">Mówiąc o kompleksowej organizacji, mam na myśli pomoc przy realizacji dnia ślubu od początku do końca, od A do Z.</p>
              <ul className="mt-4">
                <li>- pomoc przy wyborze obiektu</li>
                <li>
                  - pomoc przy wyborze podwykonawców, tj: oprawa muzyczna, catering, dobór menu, foto/wideo, dekoracje, słodki stół, make up, fryzjer itp.
                </li>
                <li>- pomoc przy podpisywaniu umów i ich archiwizacja - stworzenie wizji zaślubin jeżeli takiej nie macie</li>
                <li>- stworzenie harmonogramu dnia ślubu</li>
                <li>- pomoc logistyczna związana z dniem ślubu</li>
                <li>- stworzenie budżetu i jego kontrola</li>
                <li>- stały kontakt z podwykonawcami</li>
                <li>- pilnowanie terminów płatności</li>
                <li>- koordynacja dnia ślubu od pojawienia się pierwszych podwykonawców do ostatnich atrakcji na weselu</li>
                <li>- zadbanie w tym dniu o Parę Młodą i ich gości</li>
                <li>- kontrola harmonogramu wesela</li>
                <li>- załatwianie wszelkich spraw które mają miejsce na weselu, a nie były planowane</li>
                <li>- rozliczenie z podwykonawcami</li>
              </ul>
              <p className="mt-4">
                Nie jestem w stanie wymienić wszystkich aspektów związanych z organizacją i koordynacją, ale jestem z Wami na każdym etapie, pomagam przy każdym
                pojawiającym się problemie. Dbam o Was, o Waszych Gości, o wszystkich podwykonawców.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 lg:gap-x-5 mt-14 lg:mt-28">
          <div
            className="w-full lg:max-w-[710px] p-5 sm:p-7 lg:p-9 bg-beige order-2 lg:order-1"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className="sm:text-lg md:text-xl lg:text-2xl text-center text-yellow-700 tracking-wider">Częściowa organizacja dnia ślubu</h2>
            <div className="mt-6 lg:mt-12 text-slate-600 text-xs sm:text-sm lg:text-base">
              <p>
                Tutaj przychodzę do Was z pomocą, jeżeli nie możecie sobie poradzić z jakąś częścią organizacji, to znaczy: jeżeli utknęliście na jakimś etapie,
                coś należy dopracować, lub pojawił się jakiś problem. Szukacie podwykonawcy, obiektu, macie problem z harmonogramem. Możecie się do mnie zwrócić
                z każdym pytaniem, do czego zachęcam. Zawsze jesteście mile widziani.
              </p>
            </div>
          </div>
          <div className="w-full h-[400px] lg:h-[635px] relative lg:order-1">
            <div className="h-full w-full border-yellow-700 border -mt-2 ml-2 absolute" />
            <Image src={"/images/oferta2.jpg"} alt="oferta2" fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 lg:gap-x-5 mt-14 lg:mt-28">
          <div className="w-full h-[400px] lg:h-[635px] relative">
            <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
            <Image src={"/images/oferta3.jpg"} alt="oferta3" fill className="object-cover" />
          </div>
          <div
            className="w-full lg:max-w-[710px] p-5 sm:p-7 lg:p-9 bg-beige"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className="sm:text-lg md:text-xl lg:text-2xl text-center text-yellow-700 tracking-wider">Koordynacja dnia ślubu</h2>
            <div className="mt-6 lg:mt-12 text-slate-600 text-xs sm:text-sm lg:text-base">
              <p>
                W przypadku kiedy macie już zorganizowany cały ślub i wesele, jednak zależy Wam, aby ktoś nad Wami czuwał tego dnia, nie chcąc obarczać tym
                swoich bliskich, pomoc Wedding plannera będzie doskonałym wyjściem. To jest jeden z najważniejszych dni w życiu i warto go celebrować z
                najbliższymi, nie tracąc czasu na samodzielne załatwianie spraw tego dnia.
              </p>
              <ul className="mt-4">
                <li>- pomoc przy wyborze obiektu</li>
                <li>- nasza współpraca zaczyna się jeszcze przed ślubem, abyście mogli mi przekazać wszystkie informacje dotyczące dnia ślubu</li>
                <li>- stworzę dla Was harmonogram dnia ślubu jeżeli nie macie żadnego rozpisanego</li>
                <li>
                  - nawiążę kontakt z podwykonawcami i prześlę harmonogram - jestem z Wami przez cały dzień ślubu do zakończenia poprawin lub wszystkich innych
                  atrakcji
                </li>
                <li>- zadbam tego dnia o Was, Waszych gości oraz wszystkich podwykonawców</li>
                <li>- kontrola harmonogramu wesela</li>
                <li>- załatwianie wszelkich spraw, które mają miejsce na weselu, a nie były planowane</li>
                <li>- rozliczenie z podwykonawcami</li>
              </ul>
              <p className="mt-4">Tego dnia jestem Waszym wsparciem na każdym etapie harmonogramu. :)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 lg:gap-x-5 mt-14 lg:mt-28">
          <div
            className="w-full lg:max-w-[710px] p-5 sm:p-7 lg:p-9 bg-beige order-2 lg:order-1"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className="sm:text-lg md:text-xl lg:text-2xl text-center text-yellow-700 tracking-wider">Dekoracje</h2>
            <div className="mt-6 lg:mt-12 text-slate-600 text-xs sm:text-sm lg:text-base">
              <p>Nim wkroczyłam na ścieżkę „organizatora” :) , zaczynałam od dekoracji sal i kościołów. I nadal się tym zajmuję.</p>
              <p className="mt-4">
                Jeżeli interesuje Was dekoracja miejsca zaślubin, sali lub szukacie dekoratorki na inną okoliczność, to zapraszam Was do kontaktu po
                indywidualną wycenę. Usługi jaki wykonuję:
              </p>
              <ul className="mt-4">
                <li>- dekoracja miejsca ceremonii</li>
                <li>- dekoracja sali weselnej</li>
                <li>- dekoracje balonowe</li>
                <li>- dekoracje urodzinowe</li>
                <li>- wypożyczenie dekoracji, pokrowców</li>
              </ul>
              <p className="mt-4">
                Dekoracje sprawiają, że ważny dla Was dzień, staje się magiczny i niezwykły. Każdy dodatek cieszący nasze oko ma znaczenie, co sprawia że Ty i
                Twoi goście czujecie się wyjątkowo.
              </p>
            </div>
          </div>
          <div className="w-full h-[400px] lg:h-[635px] relative lg:order-1">
            <div className="h-full w-full border-yellow-700 border -mt-2 ml-2 absolute" />
            <Image src={"/images/oferta4.jpg"} alt="oferta4" fill className="object-cover" />
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Offer;
