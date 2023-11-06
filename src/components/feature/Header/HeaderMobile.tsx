import { FC } from "react";
import Link from "next/link";
import cx from "classnames";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { MenuLink } from "./Header";
import { useRouter } from "next/router";

type Props = {
  closeMenu: () => void;
  isFollowing: boolean;
};

const HeaderMobile: FC<Props> = ({ closeMenu, isFollowing }) => {
  const router = useRouter();

  const ids: MenuLink[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "O mnie",
      href: "/o-mnie",
    },
    {
      title: "Oferta",
      href: "/oferta",
    },
    {
      title: "Dekoracje",
      href: "/dekoracje",
    },
    {
      title: "Galeria",
      href: "/galeria",
    },
    {
      title: "Kontakt",
      href: "/kontakt",
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-full px-10 py-20 z-50 bg-beige">
      <div className={cx("absolute right-0 sm:right-5 px-5", isFollowing ? "top-6" : "top-6")}>
        <button onClick={() => closeMenu()} title="close-mobile-menu">
          <XMarkIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="mx-auto">
        <div className="flex justify-center">
          <Image src={"/images/logo-Bialy-Bukiet_sygnet.svg"} alt="logo-bialybukiet" width={36} height={36} />
        </div>
        <div className="flex justify-center"></div>
        <ul className="flex flex-col space-y-10 items-center mt-12">
          {ids.map((item) => (
            <li
              key={item.title}
              className={cx(
                "cursor-pointer hover:text-yellow-700 hover:underline hover:underline-offset-4",
                item.href == router.asPath && "underline underline-offset-4 text-yellow-700"
              )}
            >
              <Link href={item.href} onClick={() => closeMenu()}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
