import { FC } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const OfferTile: FC = () => {
  return (
    <>
      <section className="max-w-screen-2xl xl:mx-auto py-20">
        <div className="flex items-center sm:space-x-8 w-full px-10 justify-center">
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
          <h2 className="text-xl md:text-2xl xl:text-3xl tracking-wider uppercase">Oferta</h2>
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
        </div>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-x-10 gap-y-10 xl:gap-y-0 mt-12 lg:mt-20">
          <div className="">
            <div
              className="h-64 relative"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
              <Image src={"/images/oferta1.jpg"} alt="oferta1" fill className="object-cover" />
            </div>
            <h3 className="text-yellow-700 text-base md:text-lg xl:text-xl tracking-widest text-center mt-4">Kompleksowa organizacja dnia ślubu</h3>
          </div>
          <div className="">
            <div
              className="h-64 relative"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
              <Image src={"/images/oferta2.jpg"} alt="oferta1" fill className="object-cover" />
            </div>
            <h3 className="text-yellow-700 text-base md:text-lg lg:text-xl tracking-widest text-center mt-4">Częściowa organizacja dnia ślubu</h3>
          </div>
          <div className="">
            <div
              className="h-64 relative"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
              <Image src={"/images/oferta3.jpg"} alt="oferta1" fill className="object-cover" />
            </div>
            <h3 className="text-yellow-700 text-base md:text-lg lg:text-xl tracking-widest text-center mt-4">Koordynacja dnia ślubu</h3>
          </div>
          <div className="">
            <div
              className="h-64 relative"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="h-full w-full border-yellow-700 border -ml-2 -mt-2 absolute" />
              <Image src={"/images/oferta4.jpg"} alt="oferta1" fill className="object-cover" />
            </div>
            <h3 className="text-yellow-700 text-base md:text-lg lg:text-xl tracking-widest text-center mt-4">Dekoracje</h3>
          </div>
        </div>
        <div className="w-full px-10">
          <Link href={"/oferta"}>
            <Button variant="beige" className="md:max-w-xs mx-auto mt-12 lg:mt-20">
              Sprawdź ofertę
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default OfferTile;
