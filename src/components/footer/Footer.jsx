import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AHMED</a>

      <ul className="permalinks">
        <li><a href="#"></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expetience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100013474567157"><FaFacebookF /></a>
        <a href="https://www.instagram.com/ahmadahmad2991/"><FiInstagram /></a>
        <a href="https://twitter.com/AgnaouAgnaou1"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DEV "AHMED AGNAOU". All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer