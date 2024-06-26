import React from 'react'
import './nav.css'
import {ImHome3} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import {RiMailSendLine} from 'react-icons/ri'
import {ImList2} from 'react-icons/im'
import {FaVideo} from 'react-icons/fa'
import {useState} from 'react'

const Nav = () => {
  // ##### this is for setting the active nav section as a class and thus colorizing it, etc. #####
  const [activeNav, setActiveNav] = useState('')
  
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome3/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImList2/></a>
      <a href="#highlight" onClick={() => setActiveNav('#highlight')} className={activeNav === '#highlight' ? 'active' : ''}><FaVideo/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMailSendLine/></a>
    </nav>
  )
}

export default Nav