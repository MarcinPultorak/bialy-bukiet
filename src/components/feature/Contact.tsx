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
    <section className="w-full bg-beige">
      <h2 className="text-5xl italic text-black w-full text-center mt-20">Zapraszam do kontaktu !</h2>

      <div className="grid gap-4 p-4 grid-cols-2 border border-yellow-700 mx-auto my-20 max-w-screen-2xl">
        <div className="col-span-1 h-full w-full relative">
          <Image src={"/images/contact-image.png"} alt="Contact Image" fill objectFit="cover" />
        </div>
        <div className="col-span-1 border border-yellow-700 p-10 space-y-10">
          <h2 className="text-center uppercase text-2xl text-yellow-700">Zapytaj o ofertę</h2>
          <ContactForm callback={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
