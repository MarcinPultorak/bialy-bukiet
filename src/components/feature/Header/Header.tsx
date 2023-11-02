import { FC, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import cx from "classnames";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import HeaderMobile from "./HeaderMobile";

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const leftIds: string[] = ["Home", "O mnie", "Oferta"];
  const rightIds: string[] = ["Dekoracje", "Galeria", "Kontakt"];

  const { scrollY } = useScroll();
  const activeId = useScrollSpy(leftIds.concat(rightIds), 80);

  useEffect(() => {
    const updateHeader = () => {
      scrollY.get() > 0 ? setIsFollowing(true) : setIsFollowing(false);
    };

    const unsubscribeY = scrollY.on("change", updateHeader);

    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  return (
    <header
      className={cx(
        "w-full z-50",
        isFollowing ? "fixed bg-white  lg:h-12 py-5 lg:py-10" : "h-20 lg:h-24"
      )}
      style={{
        boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {isOpened && (
        <HeaderMobile
          closeMenu={() => setIsOpened(false)}
          isFollowing={isFollowing}
        />
      )}
      <div className="mx-auto flex max-w-screen-2xl w-full justify-center items-center h-full">
        <div className="flex justify-between h-full w-full px-5 sm:px-10 lg:hidden">
          <Image
            src={"/images/logo-Bialy-Bukiet_sygnet.svg"}
            alt="logo-bialybukiet"
            width={32}
            height={32}
          />
          <div className="flex items-center">
            <p className="uppercase mr-2 font-bold">Menu</p>
            <button
              onClick={() => setIsOpened(!isOpened)}
              title="hamburger-menu"
            >
              <Bars3Icon className="w-8 h-8" />
            </button>
          </div>
        </div>
        <ul className="hidden lg:flex space-x-16 items-center uppercase">
          {leftIds.map((id) => (
            <li key={id} className={cx("hover:text-yellow-700 cursor-pointer", id == activeId && "text-yellow-700")}>
              <Link href={`#${id}`}>{id}</Link>
            </li>
          ))}
          <li>
            <Image src={"/images/logo-Bialy-Bukiet_sygnet.svg"} alt="logo-bialybukiet" width={isFollowing ? 36 : 48} height={isFollowing ? 36 : 48} />
          </li>

          {rightIds.map((id) => (
            <li
              key={id}
              className={cx(
                "hover:text-yellow-700 cursor-pointer",
                id == activeId && "text-yellow-700"
              )}
            >
              <Link href={`#${id}`}>{id}</Link>
            </li>
          ))}
          <li>
            <Image
              src={"/images/logo-Bialy-Bukiet_sygnet.svg"}
              alt="logo-bialybukiet"
              width={isFollowing ? 36 : 48}
              height={isFollowing ? 36 : 48}
            />
          </li>

          {rightIds.map((id) => (
            <li
              key={id}
              className={cx(
                "hover:text-yellow-700 cursor-pointer",
                id == activeId && "text-yellow-700"
              )}
            >
              <Link href={`#${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
