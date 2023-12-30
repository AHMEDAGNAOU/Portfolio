import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>aagnaou126@gmail.com</h5>
            <a href="mailto:aagnaou126@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin />
            <h4>Linkedin</h4>
            <h5>Ahmed Agnaou</h5>
            <a href="https://www.linkedin.com/in/agnaou-agnaou-161a3428b/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Email</h4>
            <h5>+212 708 99 32 42</h5>
            <a href="https://api.whatsapp.com/send?phone=+212708993242" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' raquired/>
          <input type="email" name='email' placeholder='Your Email' raquired/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact