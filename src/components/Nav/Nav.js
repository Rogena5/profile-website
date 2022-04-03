import React from 'react';
import './nav.css';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {AiOutlineAccountBook} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {MdContactMail} from 'react-icons/md';
import {useState} from 'react';

export default function Nav() {
    const [activeNav, setActiveNav] = useState('#')
return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUserAdd/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineAccountBook/></a>
        <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
)
}
