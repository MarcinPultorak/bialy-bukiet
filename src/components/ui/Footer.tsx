import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="">
      <div className="border-y border-yellow-700 mt-24 px-5">
        <div className="max-w-screen-2xl mx-auto w-full h-full py-20 flex flex-col xl:flex-row items-center justify-between">
          <div className="relative w-full xl:w-[400px] h-[300px]">
            <Image
              src={"/images/logo-Bialy-Bukiet.svg"}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="sd:text-lg md:text-xl lg:text-2xl tracking-widest text-center mt-6 xl:mt-0">
            <p>Magda Grajek-Antonowicz</p>
            <p>506 483 167</p>
            <p>bialybukietweddingplanner@gmail.com</p>
          </div>
          <div className="flex gap-x-12 px-16 mt-10 xl:mt-0">
            <Link
              href={"https://www.facebook.com/bialybukietweddingplanner/"}
              target="_blank"
            >
              <Image
                src={"/images/facebook.svg"}
                alt="facebook"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/bialybukietweddingplanner/"}
              target="_blank"
            >
              <Image
                src={"/images/instagram.svg"}
                alt="instagram"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto h-full w-full md:flex justify-between py-5 md:py-10 px-5 text-center">
        <Link href={"#"}>
          <p>Polityka prywatności</p>
        </Link>
        <p>Copyright © 2023 Biały Bukiet Wedding Planner</p>
        <Link href={"https://www.letbefound.pl/"} target="_blank">
          <p>Strona: letbefound.pl</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
