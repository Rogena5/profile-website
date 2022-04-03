import React from 'react'
import './footer.css';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
      <a href="#/" className='footer_logo'>ROGENA</a>
      <ul className='permalinks'>
        <li><a href="#/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com" target='-blank'><AiFillFacebook/></a>
        <a href="https://instagram.com" target='-blank'><AiOutlineInstagram/></a>
        <a href="https://twitter.com" target='-blank'><AiFillTwitterCircle/></a>
      </div>
    </footer>
  )
}
