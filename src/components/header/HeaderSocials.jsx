import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://ph.linkedin.com/in/john-anthony-bayarcal-2103b4267" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jbayarcal0604" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
      
    </div>
  )
}

export default HeaderSocials
