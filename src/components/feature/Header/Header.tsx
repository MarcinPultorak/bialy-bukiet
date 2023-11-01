import { FC, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import cx from "classnames";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Image from "next/image";

const Header: FC = () => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const leftIds: string[] = ["Home", "O mnie", "Oferta"];
  const rightIds: string[] = ["Dekoracje", "Galeria", "Kontakt"];

  const { scrollY } = useScroll();
  const activeId = useScrollSpy(leftIds.concat(rightIds), 81);

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
    <header className="w-full h-24">
      <div className="mx-auto flex max-w-screen-2xl w-full justify-center items-center h-full">
        <ul className="flex space-x-16 items-center uppercase">
          {leftIds.map((id) => (
            <li key={id} className="hover:text-yellow-700">
              <Link href={`#${id}`}>{id}</Link>
            </li>
          ))}
          <li>
            <Image
              src={"/images/logo-Bialy-Bukiet_sygnet.svg"}
              alt="logo-bialybukiet"
              width={48}
              height={48}
            />
          </li>

          {rightIds.map((id) => (
            <li key={id} className="hover:text-yellow-700">
              <Link href={`#${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
