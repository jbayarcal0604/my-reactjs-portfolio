import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_31se23c', 'template_795a6f5', form.current, 'e82dm9Nmq7DALrIAH')

    
    e.target.reset()

      
  };
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail  className='contactt__option-icon'/>
          <h4>Email</h4>
          <h5>jbayarcal2000@gmail.com</h5>
          <a href="mailto:jbayarcal2000@gmail.com" target="_blank">Send a message</a>

        </article>

        <article className="contact__option">
          <RiMessengerLine  className='contactt__option-icon'/>
          <h4>Messenger</h4>
          <h5>John Anthony Bayarcal</h5>
          <a href="https://m.me/ninjasaga09" target="_blank">Send a message</a>

        </article>

        <article className="contact__option">
          <BsWhatsapp className='contactt__option-icon' />
          <h4>Viber</h4>
          <h5>09682023266</h5>
          <a href="https://www.viber.com/en/download/" target="_blank">Send a message</a>

        </article>
      
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" placeholder='Your Message' rows="7"></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>


      </form>
    </div>
   </section>
  )
}

export default Contact
