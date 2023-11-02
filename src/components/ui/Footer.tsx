import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer>
      <div className="border-y border-yellow-700 mt-24">
        <div className="max-w-screen-2xl mx-auto w-full h-full py-20 flex items-center justify-between">
          <div className="relative w-[400px] h-[300px]">
            <Image src={"/images/logo-Bialy-Bukiet.svg"} alt="logo" fill className="object-contain" />
          </div>
          <div className="text-2xl tracking-widest text-center">
            <p>Magda Grajek-Antonowicz</p>
            <p>506 483 167</p>
            <p>bialybukietweddingplanner@gmail.com</p>
          </div>
          <div className="flex gap-x-12 px-16">
            <Image src={"/images/facebook.svg"} alt="facebook" width={60} height={60} className="object-contain" />
            <Image src={"/images/instagram.svg"} alt="instagram" width={60} height={60} className="object-contain" />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto h-full w-full flex justify-between py-10">
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
