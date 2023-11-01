import { FC, ReactNode } from "react";
import Footer from "../ui/Footer";
import Header from "../feature/Header/Header";
import cx from "classnames";

const Layout: FC<
  React.HTMLAttributes<HTMLDivElement> & { children: ReactNode }
> = (props) => {
  return (
    <div
      className={cx(
        "flex min-h-screen w-full flex-1 flex-col bg-cover overflow-x-hidden",
        props.className
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
