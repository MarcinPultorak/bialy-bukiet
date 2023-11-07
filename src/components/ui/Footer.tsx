import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="">
      <div className="border-y border-yellow-700 mt-24 px-5">
        <div className="max-w-screen-2xl mx-auto w-full h-full py-20 px-5 flex flex-row items-center justify-between">
          <div className="flex flex-col gap-y-4 tracking-widest">
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
              <p>bialybukietweddingplanner@gmail.com</p>
            </div>
          </div>
          <div className="relative w-full xl:w-[300px] h-[230px]">
            <Image
              src={"/images/logo-Bialy-Bukiet.svg"}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-y-4 items-end">
            <Link
              href={"https://www.facebook.com/bialybukietweddingplanner/"}
              target="_blank"
              className="flex gap-x-2 tracking-widest"
            >
              <p>Facebook</p>
              <Image
                src={"/images/facebook.svg"}
                alt="facebook"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/bialybukietweddingplanner/"}
              target="_blank"
              className="flex gap-x-2 tracking-widest"
            >
              <p>Instagram</p>
              <Image
                src={"/images/instagram.svg"}
                alt="instagram"
                width={24}
                height={24}
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
