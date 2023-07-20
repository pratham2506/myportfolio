import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>prathammatkar2506@gmail.com</h5>
            <a href="mailto:prathammatkar2506@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>prathammatkar2506@gmail.com</h5>
            <a href="mailto:prathammatkar2506@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>prathammatkar2506@gmail.com</h5>
            <a href="mailto:prathammatkar2506@gmail.com" target="_blank">Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Enter your Fullname' required />
          <input type="email" name='email' placeholder='Enter your Email' required />
          <textarea name='message' rows="7" placeholder='Describe your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
