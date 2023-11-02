import { FC } from "react";
import Link from "next/link";
import cx from "classnames";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

type Props = {
  closeMenu: () => void;
  isFollowing: boolean;
};

const HeaderMobile: FC<Props> = ({ closeMenu, isFollowing }) => {
  const ids: string[] = [
    "Home",
    "O mnie",
    "Oferta",
    "Dekoracje",
    "Galeria",
    "Kontakt",
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-full px-10 py-20 z-50 bg-beige">
      <div
        className={cx(
          "absolute  right-0 sm:right-5 px-5",
          isFollowing ? "top-6" : "top-6"
        )}
      >
        <button onClick={() => closeMenu()} title="close-mobile-menu">
          <XMarkIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="mx-auto">
        <div className="flex justify-center">
          <Image
            src={"/images/logo-Bialy-Bukiet_sygnet.svg"}
            alt="logo-bialybukiet"
            width={36}
            height={36}
          />
        </div>
        <div className="flex justify-center"></div>
        <ul className="flex flex-col space-y-10 items-center mt-12">
          {ids.map((id) => (
            <li
              key={id}
              className="cursor-pointer border-b border-b-yellow-700 hover:text-yellow-700"
            >
              <Link href={`#${id}`} onClick={() => closeMenu()}>
                {id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
