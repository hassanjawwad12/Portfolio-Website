import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">HASSAN</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
         <a href="https://www.facebook.com/profile.php?id=100010183145812"><FaFacebookF/></a>
         <a href="https://www.instagram.com/me_hassan1/"><FiInstagram/></a>
         <a href="https://www.linkedin.com/in/hassan-jawwad-a47284269/"><BsLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer