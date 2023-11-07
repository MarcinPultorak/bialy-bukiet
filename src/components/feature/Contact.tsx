import { FC } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { ContactFormDto } from "@/interfaces/types";

const Contact: FC = () => {
  const handleSubmit = (payload: ContactFormDto) => {
    console.log(payload);
    return Promise.resolve();
  };

  return (
    <section className="w-full bg-beige py-20 px-5 sm:px-10">
      <h2 className="text-xl md:text-2xl xl:text-3xl uppercase  text-black w-full text-center tracking-wider">
        Zapraszam do kontaktu
      </h2>
      <div className="grid gap-4 p-4 grid-cols-1 xl:grid-cols-2 border border-yellow-700 mx-auto my-20 max-w-screen-2xl">
        <div className="col-span-1 h-72 md:h-96 xl:h-full w-full relative">
          <Image
            src={"/images/contact-image.jpg"}
            alt="Contact Image"
            fill
            objectFit="cover"
          />
        </div>
        <div className="col-span-1 border border-yellow-700 p-6 sm:p-10 space-y-10">
          <h2 className="text-center uppercase text-lg md:text-xl xl:text-2xl text-yellow-700">
            Zapytaj o ofertę
          </h2>
          <ContactForm callback={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
