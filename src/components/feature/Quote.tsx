import { FC } from "react";
import Image from "next/image";
import { Parallax } from "react-parallax";

const Quote: FC = () => {
  return (
    <Parallax
      strength={600}
      bgImage="/images/cytat.jpg"
      bgImageStyle={{
        objectFit: "cover",
      }}
    >
      <section
        className="w-full h-[650px] relative"
        style={{
          background: "rgba(0, 0, 0, 0.50)",
        }}
      >
        {/* <Image
        src={"/images/cytat.jpg"}
        alt="cytat"
        fill
        className="object-cover -z-10"
      /> */}

        <div className="max-w-screen-2xl mx-auto h-full w-full z-20 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-end lg:justify-center">
            <p className="italic tracking-widest px-10">
              “Żaden dzień się nie powtórzy, nie ma dwóch podobnych nocy, dwóch
              tych samych pocałunków, dwóch jednakich spojrzeń w oczy.”
            </p>
            <p className="self-end sm:text-lg md:text-xl lg:text-2xl italic tracking-widest mt-4 pr-4 lg:pr-0">
              -Wisława Szymborska
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="self-center lg:self-end tracking-widest">
              Nie przegap swojego dnia...
            </p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Quote;
