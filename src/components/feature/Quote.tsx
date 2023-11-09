import { FC } from "react";
import Image from "next/image";
import isMobile from "is-mobile";

const Quote: FC = () => {
  const isIOS =
    typeof window !== "undefined" &&
    isMobile({ tablet: true, featureDetect: true, ua: navigator.userAgent });
  console.log(isIOS);
  return (
    <section
      className="w-full h-[650px] relative"
      style={{
        background: "rgba(0, 0, 0, 0.50)",
        backgroundImage: "url(/images/cytat1.jpg)",
        backgroundPosition: "center",
        backgroundAttachment: isIOS == true ? "scroll" : "fixed",
        backgroundSize: "cover",
      }}
    >
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
            <span className="text-transparent">{isIOS ? " " : "  "}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
