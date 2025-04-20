import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App