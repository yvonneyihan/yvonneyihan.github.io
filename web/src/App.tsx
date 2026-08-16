import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";

const SECTION_IDS = ["about", "projects", "experience", "skills", "contact"];

function App() {
  const { dark, toggle } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div id="top">
      <Header dark={dark} onToggleTheme={toggle} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceEducation />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
