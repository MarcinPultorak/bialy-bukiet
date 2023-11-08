import { FC, useState } from "react";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const Testimonials: FC = () => {
  const [opinion, setOpinion] = useState(0);
  const isMobile = useIsMobile(768);

  const opinions: { opinion: string; who: string }[] = [
    {
      opinion:
        "“To była piękna oparta na zaufaniu współpraca. Serdecznie polecam, bo zdecydowanie warto. Magda to wulkan pomysłów i propozycji, z nią zdecydowanie poczujecie się wyjątkowi. Poświęciła nam dużo czasu, prowadziła otwartą i szczerą komunikację. Chciała realizować naszą wizję razem z nami. Wystarczyło wskazać jej kierunek, a reszta magii działa się już w jej rękach. Przy tak dużej i organizacyjnie trudnej imprezie warto mieć przy sobie kogoś takie jak Magda. Zaufanie, które między nami zbudowała zaowocowało zjawiskowym efektem i zdjęło z nas dużą część pracy.”",
      who: "Honorata",
    },
    {
      opinion:
        '"Polecam z całego ❤️! Wyczaruje każdemu dekoracje o jakich marzycie😊 Sympatyczna dziewczyna pełna pomysłów zna sie na tym co robi i jak widać lubi to co robi. Super kontakt, wysłucha cierpliwie jak wy to widzicie doradzi co można zmienić a później już o nic się nie musicie martwić! Magda zaczyna działać a wy w tym czasie możecie spać spokojnie😁 Tak było w Naszym przypadku i byliśmy bardzo zadowoleni!"',
      who: "Ania",
    },
    {
      opinion:
        '"Polecamy z całego serca #białybukietweddingplanner za zaangażowanie, wsparcie i doradztwo - wszystko było na 1000%😍 a my mogliśmy cieszyć się TYM dniem ☺️❤️"',
      who: "Martyna",
    },
    {
      opinion:
        '"Dziękujemy za pomoc w tym wyjątkowym dla nas dniu. Współpraca, kontakt oraz Twoje zaangażowanie w tej projekt był na 6 z plusem. A aranżacja wykonana przez Ciebie... cóż... widać na zdjęciach jak była fantastyczna 🙂"',
      who: "Łukasz",
    },
  ];

  const handleOpinion = (direction: number) => {
    if (direction == 1 && opinion < opinions.length - 1) {
      setOpinion(opinion + 1);
    } else if (direction == 1 && opinion == opinions.length - 1) {
      setOpinion(0);
    } else if (direction == -1 && opinion == 0) {
      setOpinion(opinions.length - 1);
    } else if (direction == -1 && opinion > 0) {
      setOpinion(opinion - 1);
    }
  };

  return (
    <section className="bg-beige w-full py-20 px-10">
      {isMobile ? (
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center sm:space-x-8 w-full px-10 justify-center">
            <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
            <h2 className="text-xl md:text-2xl xl:text-3xl uppercase tracking-wider">
              Miłe słowa
            </h2>
            <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
          </div>
          <div className="flex flex-col items-center justify-center gap-x-20 mt-20">
            <motion.div
              className="max-w-2xl flex flex-col"
              key={opinion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.7 },
              }}
            >
              <p className="text-sm">{opinions[opinion].opinion}</p>
              <p className="self-end font-mono mt-4 text-lg">
                {opinions[opinion].who}
              </p>
            </motion.div>
            <div className="flex w-full justify-center gap-x-20 mt-10 text-sm">
              <button
                onClick={() => handleOpinion(-1)}
                className="italic text-slate-600 border-b border-yellow-700 pb-2"
              >
                Poprzednia
              </button>
              <button
                onClick={() => handleOpinion(1)}
                className="italic text-slate-600 border-b border-yellow-700 pb-2"
              >
                Następna
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center sm:space-x-8 w-full px-10 justify-center">
            <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
            <h2 className="text-xl md:text-2xl xl:text-3xl uppercase tracking-wider">
              Miłe słowa
            </h2>
            <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
          </div>
          <div className="flex items-center justify-center gap-x-5 mt-20">
            <button
              onClick={() => handleOpinion(-1)}
              className="italic text-slate-600 border-b border-yellow-700 pb-2"
            >
              Poprzednia
            </button>
            <motion.div
              className="max-w-2xl flex flex-col px-5"
              key={opinion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.7 },
              }}
            >
              <p>{opinions[opinion].opinion}</p>
              <p className=" font-mono self-end mt-6 text-xl">
                {opinions[opinion].who}
              </p>
            </motion.div>
            <button
              onClick={() => handleOpinion(1)}
              className="italic text-slate-600 border-b border-yellow-700 pb-2"
            >
              Następna
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
