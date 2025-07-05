import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import NavBar from '../component/NavBar'
import HeroSection from '../component/HeroSection'
import AboutSection from '../component/AboutSection'
import SkillsSection from '../component/SkillsSection'
import ProjectSection from '../component/ProjectSection'
import ContactSections from '../component/ContactSections'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='min-h-screen relative'>
      {/* theme toggle  */}
        <ThemeToggle/>
      {/* background effect */}

      {/* navbar */}
      <NavBar/>
      {/* main content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSections/>
        <Footer/>
      </main>
      {/* footer */}
    </div>
  )
}

export default Home
