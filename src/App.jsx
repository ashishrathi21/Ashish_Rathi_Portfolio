import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Project/>
      <Achievement/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
