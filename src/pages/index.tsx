import AboutMe from "@/components/feature/AboutMe";
import Contact from "@/components/feature/Contact";
import Courses from "@/components/feature/Courses";
import Decor from "@/components/feature/Decor";
import Gallery from "@/components/feature/Gallery";
import Hero from "@/components/feature/Hero";
import Offer from "@/components/feature/Offer";
import Quote from "@/components/feature/Quote";
import Welcome from "@/components/feature/Welcome";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Home() {
  return (
    <>
      <SectionWrapper id="Home">
        <Hero />
        <Welcome />
      </SectionWrapper>
      <SectionWrapper id="O mnie">
        <AboutMe />
        <Courses />
      </SectionWrapper>
      <SectionWrapper id="Oferta">
        <Offer />
      </SectionWrapper>
      <SectionWrapper id="Dekoracje">
        <Decor />
      </SectionWrapper>
      <SectionWrapper id="Galeria">
        <Gallery />
        <Quote />
      </SectionWrapper>
      <SectionWrapper id="Kontakt">
        <Contact />
      </SectionWrapper>
    </>
  );
}
