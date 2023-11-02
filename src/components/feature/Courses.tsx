import { FC } from "react";
import Image from "next/image";
import cx from "classnames";
import useIsMobile from "@/hooks/useIsMobile";

const Courses: FC = () => {
  const isMobile1280 = useIsMobile(1280);
  const isMobile1024 = useIsMobile(1024);

  return (
    <section className="py-10 mt-10 md:mt-20 mx-auto w-full">
      {isMobile1280 ? <h2 className="uppercase text-3xl md:text-4xl lg:text-5xl mt-5 text-center mb-10">Ukończone szkolenia</h2> : null}
      <div className="flex flex-col max-w-screen-2xl w-full mx-auto lg:px-10">
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <Image src={"/images/dyplom1.png"} alt="dyplom1" width={550} height={750} className="object-cover p-5 lg:p-0" />
          <div className="w-full flex flex-col order-first lg:order-last">
            {!isMobile1280 ? <h2 className="uppercase text-5xl mt-5 self-center">Ukończone szkolenia</h2> : null}
            <div className={cx("relative px-5 py-10 lg:py-14 lg:mt-28 xl:mt-20", isMobile1024 && "bg-beige")}>
              <p className="text-base md:text-xl xl:text-2xl max-w-xl text-center mx-auto">
                Bardzo ważny jest dla mnie rozwój i podnoszenie kwalifikacji po to by realizować nowe pomysły i nie stać w miejscu.
              </p>
              {!isMobile1024 ? <div className="absolute left-0 top-0 bg-beige h-full w-screen -z-10" /> : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full flex flex-col">
            <div className={cx("relative px-5 py-10 lg:py-14 lg:mt-12", isMobile1024 && "bg-beige")}>
              <p className="text-base md:text-xl xl:text-2xl max-w-xl text-center mx-auto">
                Doceniam poznawanie nowych ludzi z branży i wymianę swoich doświadczeń. Uwielbiam zdrowe podejście do konkurencji i pozytywną energię z tym
                związaną
              </p>
              {!isMobile1024 ? <div className="absolute right-0 top-0 bg-beige h-full w-screen -z-10" /> : null}
            </div>
          </div>
          <Image src={"/images/dyplom2.png"} alt="dyplom2" width={550} height={750} className="object-cover lg:-mt-80 p-5 lg:p-0" />
        </div>
      </div>
    </section>
  );
};

export default Courses;
