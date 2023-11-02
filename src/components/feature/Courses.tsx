import { FC } from "react";
import Image from "next/image";

const Courses: FC = () => {
  return (
    <section className="py-10 mx-auto w-full">
      <div className="flex flex-col max-w-screen-2xl w-full mx-auto ">
        <div className="flex">
          <Image
            src={"/images/dyplom1.png"}
            alt="dyplom1"
            width={550}
            height={750}
            className="object-cover"
          />
          <div className="w-full flex flex-col">
            <h2 className="uppercase text-5xl mt-5 self-center">
              Ukończone szkolenia
            </h2>
            <div className="bg-beige py-14 mt-20">
              <p className=" text-2xl max-w-xl text-center mx-auto">
                Bardzo ważny jest dla mnie rozwój i podnoszenie kwalifikacji po
                to by realizować nowe pomysły i nie stać w miejscu.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full flex flex-col">
            <div className="bg-beige py-14 mt-12">
              <p className=" text-2xl max-w-xl text-center mx-auto">
                Doceniam poznawanie nowych ludzi z branży i wymianę swoich
                doświadczeń. Uwielbiam zdrowe podejście do konkurencji i
                pozytywną energię z tym związaną
              </p>
            </div>
          </div>
          <Image
            src={"/images/dyplom2.png"}
            alt="dyplom1"
            width={550}
            height={750}
            className="object-cover -mt-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
