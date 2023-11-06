import Collaboration from "@/components/feature/Collaboration";
import Contact from "@/components/feature/Contact";
import Decor from "@/components/feature/Decor";
import Gallery from "@/components/feature/Gallery";
import Hero from "@/components/feature/Hero";
import Offer from "@/components/feature/Offer";
import Quote from "@/components/feature/Quote";
import Welcome from "@/components/feature/Welcome";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Collaboration />
      <Offer />
      <Decor />
      <Gallery />
      <Quote />
      <Contact />
    </>
  );
};

export default HomePage;
