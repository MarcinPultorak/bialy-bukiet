import { FC } from "react";
import Image from "next/image";

const Quote: FC = () => {
  return (
    <>
      <section
        className="w-full h-screen relative"
        style={{
          background: "rgba(0, 0, 0, 0.50)",
        }}
      >
        <Image
          src={"/images/cytat.jpg"}
          alt="cytat"
          fill
          className="object-cover -z-10"
        />
        <div className="max-w-screen-2xl mx-auto h-full w-full z-20 text-white text-4xl grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="italic tracking-widest px-10">
              “Żaden dzień się nie powtórzy, nie ma dwóch podobnych nocy, dwóch
              tych samych pocałunków, dwóch jednakich spojrzeń w oczy.”
            </p>
            <p className="self-end text-2xl italic tracking-widest mt-4">
              -Wisława Szymborska
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="self-end tracking-widest">
              Nie przegap swojego dnia...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
