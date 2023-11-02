import { FC } from "react";
import Image from "next/image";

const Decor: FC = () => {
  return (
    <section className="w-full h-full bg-beige py-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col px-10">
        <h2 className="text-5xl mx-auto uppercase">Dekoracje</h2>
        <div className="grid grid-cols-2 mt-20">
          <div className="flex flex-col w-full px-20">
            <div className="w-[310px] h-[260px] relative">
              <Image
                src={"/images/oferta1.jpg"}
                alt="decor1"
                fill
                className="object-cover z-30"
              />
            </div>
            <div className="w-[310px] h-[260px] relative self-end -mt-24">
              <Image
                src={"/images/oferta1.jpg"}
                alt="decor1"
                fill
                className="object-cover z-30"
              />
            </div>
            <div className="w-[310px] h-[260px] relative -mt-24">
              <Image
                src={"/images/oferta1.jpg"}
                alt="decor1"
                fill
                className="object-cover z-30"
              />
            </div>
            <div className="w-[310px] h-[260px] relative self-end -mt-24">
              <Image
                src={"/images/oferta1.jpg"}
                alt="decor1"
                fill
                className="object-cover z-30"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div
              className="px-10 py-20 text-center bg-white max-w-2xl"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <p className="text-2xl font-bold">
                Nim wkroczyłam na ścieżkę „organizatora” :) , zaczynałam od
                dekoracji sal i kościołów. I nadal się tym zajmuję.
              </p>
              <p className="text-lg mt-4">
                Jeżeli interesuje Was dekoracja na miejsca zaślubin, sali lub
                szukacie dekoratorki na inna okoliczność to zapraszam Cię do
                kontaktu po indywidualną wycenę. Oferuję:
              </p>
              <ul className="text-lg mt-4">
                <li>-dekorację miejsca ceremonii</li>
                <li>-dekoracja sali weselnej</li>
                <li>-dekoracje balonowe</li>
                <li>-dekoracje urodzinowe</li>
                <li>-wypożyczenie dekoracji , pokrowców</li>
              </ul>

              <p className="text-2xl font-bold mt-4">
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
