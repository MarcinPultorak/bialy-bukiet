import { FC } from "react";
import Image from "next/image";

const Decor: FC = () => {
  return (
    <section className="w-full h-full bg-beige py-10 md:py-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mx-auto uppercase">
          Dekoracje
        </h2>
        <div className="grid grid-flow-col grid-rows-2 xl:grid-rows-none xl:grid-cols-2 mt-10 lg:mt-20">
          <div
            className="w-full h-full relative"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src={"/images/gallery/20230128_144246.jpg"}
              alt="decor1"
              fill
              className="object-cover z-30"
            />
          </div>

          <div className="flex items-center">
            <div
              className="px-5 sm:px-10 py-10 sm:py-20 text-center bg-white "
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <p className="sm:text-lg md:text-xl lg:text-2xl font-bold">
                Nim wkroczyłam na ścieżkę „organizatora” :) , zaczynałam od
                dekoracji sal i kościołów. I nadal się tym zajmuję.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4">
                Jeżeli interesuje Was dekoracja na miejsca zaślubin, sali lub
                szukacie dekoratorki na inna okoliczność to zapraszam Cię do
                kontaktu po indywidualną wycenę. Oferuję:
              </p>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg mt-4">
                <li>-dekorację miejsca ceremonii</li>
                <li>-dekoracja sali weselnej</li>
                <li>-dekoracje balonowe</li>
                <li>-dekoracje urodzinowe</li>
                <li>-wypożyczenie dekoracji , pokrowców</li>
              </ul>

              <p className="sm:text-lg md:text-xl lg:text-2xl  font-bold mt-4">
                Dekoracje sprawiają że ważny dla Was dzień, staje się magiczny i
                niezwykły. Każdy dodatek, cieszący nasze oko, ma znaczenia, co
                sprawia że Ty i Twoi goście czujecie się wyjątkowo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decor;
