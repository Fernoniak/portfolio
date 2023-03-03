import Experience from './Components/Experience.js'
import Skills from './Components/Skills.js'
import Navbar from './Components/Navbar.js'
import AboutMe from './Components/AboutMe.js'
import Contact from './Components/Contact.js'
import Portfolio from './Components/Portfolio.js'
import React from 'react';
import './App.css';




function App() {

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const cHolder = entry.target.querySelector('.column-holder');

        if (entry.isIntersecting) {
          cHolder.classList.add('c-animation');
          return
        }
        cHolder.classList.remove('c-animation');

      })
    })


    observer.observe(document.querySelector('.experience-container'))

  })





  return (

    <div className="App">
      <Navbar />
      <AboutMe />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}



export default App;
