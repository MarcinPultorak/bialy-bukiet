import { FC, ReactNode } from "react";
import Footer from "../ui/Footer";
import Header from "../feature/Header/Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-1 flex-col bg-cover overflow-x-hidden">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
