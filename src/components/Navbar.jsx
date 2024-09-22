import React from 'react'
import logo from "../assets/Aslogomain.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

let styles={
  color:"white",
}
export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div   className='flex flex-shrink-0 items-center'>
          <a href='#'><img style={{cursor:"pointer"}} src={logo} alt="logo" className="h-10 w-20 mx-2 " /></a>  
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>

           <a href='https://www.linkedin.com/in/adityasharma14/' target='_blank' rel="noopener noreferrer"
           className='relative'>
           <span className='btn'>
           <FaLinkedin  className="text-3xl transition-transform transform hover:scale-110" cursor={"pointer"} />
           </span>
           
           </a> 
            <a href='https://twitter.com/adisha_10' target='_blank' rel='noopener noreferrer' className='relative'>
            <span className='btn'>
            <FaSquareXTwitter className="text-3xl transition-transform transform hover:scale-110"  cursor={"pointer"} />
            </span>
            </a>
           <a href='https://github.com/adi4512' target='_blank' rel='noopener noreferrer' className='relative'>
           <span className='btn'>
           
           <FaGithub className="text-3xl transition-transform transform hover:scale-110"  cursor={"pointer"} />
           </span>
           
           </a> 

        </div>
    </nav>
  )
}
