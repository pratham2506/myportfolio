import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'

function Headersocial() {
  return (
    <div className='header__social'>
    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> 
    <a href="https://github.com" target="_blank"><AiFillGithub/></a> 
    <a href="https://dribble.com" target="_blank"><AiFillDribbbleCircle/></a> 
      
    </div>
  )
}

export default Headersocial
