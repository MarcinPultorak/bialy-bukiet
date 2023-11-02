import AboutMe from "@/components/feature/AboutMe";
import Contact from "@/components/feature/Contact";
import Courses from "@/components/feature/Courses";
import Decor from "@/components/feature/Decor";
import Gallery from "@/components/feature/Gallery";
import Hero from "@/components/feature/Hero";
import Offer from "@/components/feature/Offer";
import Quote from "@/components/feature/Quote";
import Welcome from "@/components/feature/Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <AboutMe />
      <Courses />
      <Offer />
      <Decor />
      <Gallery />
      <Quote />
      <Contact />
    </>
  );
}
