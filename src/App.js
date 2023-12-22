import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About2 from './components/about2/About2'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      {/* <About/> */}
      <About2/>
      <Experience/>
      {/* <Services/> */}
      {/* <Portfolio/> */}
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App;
