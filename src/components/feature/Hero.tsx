import { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <>
      <section className="w-full h-screen relative py-28">
        <Image
          src={"/images/hero.png"}
          alt="hero-image"
          fill
          className="object-cover absolute -z-10"
        />
        <div
          className="h-full w-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(270deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.25) 50.18%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        >
          <Image
            src={"/images/logo-hero.png"}
            alt="logo-hero"
            width={1100}
            height={800}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
