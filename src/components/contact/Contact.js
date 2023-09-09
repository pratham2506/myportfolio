import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v6kgaki', 'template_37gtb6n', form.current, 'e_4GZJ4zkAZXmNdwg')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>Pratham Matkar</h5> */}
            <a href="mailto:prathammatkar2506@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            {/* <h5>Pratham Matkar</h5> */}
            <a href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>Pratham Matkar</h5> */}
            <a href="https://wa.me/9152858942" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input className='cap' type="text" name='name' placeholder='Enter your Full Name' required />
          <input type="email" name='email' placeholder='Enter your Email' required />
          <textarea name='message' rows="7" placeholder='Describe your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
