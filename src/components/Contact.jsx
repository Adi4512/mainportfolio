import React from 'react'
import {CONTACT} from '../constants'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
       className='my-10 text-center text-4xl'>✨Let's Connect and Create Magic</motion.h2>
      <div className='text-center tracking-tighter'>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}} 
       className='p-1 flex justify-center items-center'>
      <CiLocationOn className='mr-2' />
      <p className='my-4'>{CONTACT.address}</p>
      </motion.div>

      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1}} 
       className='p-1 flex justify-center items-center'>
      <FaPhoneAlt className='mr-2'/>
      <p className='my-4'>{CONTACT.phoneNo}</p>
      </motion.div>
      <motion.div
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-20}}
      transition={{duration:1}} 
       className='p-1 flex justify-center items-center'>
      <MdAttachEmail className='mr-2'/>
      <a  href='#' className='border-b'>{CONTACT.email}</a>
      </motion.div>
      </div>
    </div>
  )
}
