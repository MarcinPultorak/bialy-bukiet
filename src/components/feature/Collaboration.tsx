import { FC } from "react";
import Image from "next/image";

const Collaboration: FC = () => {
  const data: { label: string; description: string }[] = [
    {
      label: "Więcej czasu",
      description:
        "Organizacja ślubu to ogrom telefonów, maili, analiza ofert podwykonawców aby wyselekcjonować te najkorzystniejsze. I będziecie musieli to robić, jak się domyślam, popołudniami, po pracy w weekendy. Ja Wam mogę ten czas zaoszczędzić i dać gotowe propozycje podwykonawców, oparte na Waszych potrzebach",
    },
    {
      label: "Bezpieczeństwo",
      description:
        "Oczywistym jest że każdy z nas jest inny, ma swoje mocne strony, talenty, obszary na których się znamy lepiej lub trochę mniej i takie o których nie mamy pojęcia. I to jest NORMALNE. Dlatego warto czasem poprosić kogoś o pomoc, kto będzie miał na to czas, kto ma odpowiednie narzędzia i kto „to czuje”. Mając taką osobę przy sobie, czujecie się zwyczajnie bezpieczniej. Że ktoś jest i czuwa nad całą organizacją i Wami :)",
    },
    {
      label: "Zaufanie",
      description:
        "Bez tego ciężko się współpracuję. Dlatego bardzo ważne jest aby przy wyborze, zarówno wedding plannera, czy innych podwykonawców, poznać się wcześniej. W końcu będziecie z tymi ludźmi współpracować i powierzacie im jeden z najważniejszych dni w życiu. Czytając opinie klienta po realizacji, dociera do Ciebie, jakie to ważne w całym procesie realizacji.",
    },
    {
      label: "Pomoc",
      description:
        "To jest jedna z moich cech charakteru. Lubię pomagać ludziom, tak już mam. I to jest idealny zawód, gdzie mogę pomagać i mogę z tego żyć. Jest to coś wrodzonego, nie nabytego. Na moją pomoc możecie liczyć w każdym aspekcie, zarówno na etapie organizacji jak i koordynacji dnia ślubu.",
    },
  ];

  return (
    <section className="bg-beige w-full">
      <div className="py-20 max-w-screen-2xl mx-auto px-10">
        <div className="flex items-center sm:space-x-8 w-full xl:px-20">
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full" />
          <h2 className="text-center text-xl md:text-2xl xl:text-3xl space-y-2 font-serif tracking-wider w-full min-w-fit">
            <p>
              Współpracując z <span className="text-yellow-700">Białym Bukietem</span>
            </p>
            <p>zyskujecie przede wszystkim</p>
          </h2>
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 md:gap-12 xl:gap-16 mt-12 lg:mt-20">
          {data.map((item) => (
            <div className="flex flex-col items-center font-serif">
              <Image src={"/images/bukiet.png"} width={48} height={48} alt="bukiet-icon" />
              <h2 className="uppercase mt-3 text-yellow-700 text-base md:text-xl tracking-widest">{item.label}</h2>
              <p className="mt-6 text-justify text-slate-600 text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
