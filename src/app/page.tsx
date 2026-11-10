import About from "@/components/custom/About";
import Contact from "@/components/custom/Contact";
import { Experiences } from "@/components/custom/Experiences";
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import Projects from "@/components/custom/Projects";
import Skills from "@/components/custom/Skills";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        {/* <Contact /> */}
      </main>
    </div>
  );
};

export default HomePage;
