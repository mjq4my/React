import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { IconContext } from 'react-icons'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

        <a href="https://www.instagram.com/vibe.ratingz" target="_blank">
          <BsInstagram font-size= '2rem' color='white'/>
        </a>
        <a href="https://www.linkedin.com/in/michael-quinn33" target="_blank">
          <BsLinkedin font-size= '2rem' color='white'/>
        </a>
        <a href="https://github.com/mjq4my" target="_blank">
          <BsGithub font-size= '2rem' color='white'/>
        </a>

    </div>
  )
}

export default HeaderSocials