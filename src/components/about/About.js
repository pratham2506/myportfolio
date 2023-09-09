import React from 'react'
import './about.css'
import ME from '../../assets/1.png'
import {RiAwardFill} from 'react-icons/ri'
import {GiDiploma} from 'react-icons/gi'
import {TbCertificate} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <GiDiploma className='about__icon'/> 
            <h5>Diploma IT</h5>
            <small>89.33%</small>
          </article>

          <article className='about__card'>
            <TbCertificate className='about__icon'/> 
            <h5>B.E AIDS</h5>
            <small>Pursuing</small>
          </article>
          
          <article className='about__card'>
            <RiAwardFill className='about__icon'/> 
            <h5>Experience</h5>
            <small>6+ Months Working</small>
          </article>
        </div>
        <p>
        Quick learner & Active IT Enthusiast with a passion
for transforming complex technical challenges into
streamlined solutions. Strong analytical skills and a
knack for problem-solving. Excellent communicator
& a team player dedicated to achieving both
individual & organizational goals.

        </p>

        <a href="#contact" className='btn btn-primary mt'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
