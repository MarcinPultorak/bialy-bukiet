import Collaboration from "@/components/feature/Collaboration";
import Hero from "@/components/feature/Hero";
import OfferTile from "@/components/feature/OfferTile";
import Quote from "@/components/feature/Quote";
import Testimonials from "@/components/feature/Testimonials";
import Welcome from "@/components/feature/Welcome";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Collaboration />
      <OfferTile />
      <Testimonials />
      <Quote />
    </>
  );
};

export default HomePage;
