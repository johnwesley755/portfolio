import React from 'react'
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection'
import AboutUs from './AboutUs/AboutUs';
import Skills from './Skills/Skills';
import ProjectSection from './ProjectSection/ProjectSection';
import Footer from './Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <AboutUs />
      <Skills />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App