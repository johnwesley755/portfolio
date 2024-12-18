import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Achievements from "./Achievements";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <Achievements />
      </section>

      {/* Contacts Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer / Contact Section */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
