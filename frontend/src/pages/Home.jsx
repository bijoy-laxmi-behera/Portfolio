import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Capabilities from "../sections/Capabilities";
import Education from "../sections/Education";
import Experience from "../sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Capabilities />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}