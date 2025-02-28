import "./index.css"
import "./App.css";
import Wellcome from "./components/Wellcome";
import Spotify from "./components/Spotify";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import DownloadCV from "./components/DownloadCV";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <main class="parent">
        <Wellcome />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Spotify />
        <Experience />
        <Contact />
        <DownloadCV />
      </main>
    </>
  );
}

export default App;
