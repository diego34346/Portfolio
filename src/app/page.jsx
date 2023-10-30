import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

function Page() {
  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </>
  );
}

export default Page;
