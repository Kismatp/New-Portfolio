import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
