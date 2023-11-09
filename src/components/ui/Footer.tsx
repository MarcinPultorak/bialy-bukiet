import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer>
      <div className="border-y border-yellow-700 mt-24 px-5">
        <div className="max-w-screen-2xl mx-auto w-full h-full py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-y-4 text-sm sm:text-base tracking-widest items-center lg:items-start flex-1 lg:order-1 font-bold">
            <div>
              <p>Magda Grajek-Antonowicz</p>
            </div>
            <div className="flex gap-x-2">
              <Image
                src={"/images/phone.svg"}
                alt="phone-icon"
                width={24}
                height={24}
              />
              <p>506 483 167</p>
            </div>
            <div className="flex gap-x-2">
              <Image
                src={"/images/mail.svg"}
                alt="mail-icon"
                width={24}
                height={24}
              />
              <p className="break-all">bialybukietweddingplanner@gmail.com</p>
            </div>
          </div>
          <div className="relative w-full sm:w-[300px] h-[230px] aspect-square order-first lg:order-2">
            <Image
              src={"/images/logo-Bialy-Bukiet.svg"}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-y-4 items-end flex-1 order-3">
            <Link
              href={"https://www.facebook.com/bialybukietweddingplanner/"}
              target="_blank"
              className="flex gap-x-2 tracking-widest hover:text-yellow-700"
            >
              <p className="text-sm sm:text-base">Facebook</p>
              <Image
                src={"/images/facebook.svg"}
                alt="facebook-logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/bialybukietweddingplanner/"}
              target="_blank"
              className="flex gap-x-2 tracking-widest hover:text-yellow-700"
            >
              <p className="text-sm sm:text-base">Instagram</p>
              <Image
                src={"/images/instagram.svg"}
                alt="instagram-logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto text-sm sm:text-base h-full w-full flex flex-col gap-5 md:flex-row justify-between py-5 md:py-10 px-5 text-center">
        <Link href={"/polityka-prywatnosci"} className="hover:text-yellow-700">
          <p>Polityka prywatności</p>
        </Link>
        <p>Copyright © 2023 Biały Bukiet Wedding Planner</p>
        <Link
          href={"https://www.letbefound.pl/"}
          target="_blank"
          className="hover:text-yellow-700"
        >
          <p>Wykonawca: www.letbefound.pl</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
