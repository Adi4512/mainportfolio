import React from 'react'
import aboutImg from "../assets/about-1.webp"
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About<span className='text-neutral-500'> Me</span></h2>
    <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
         className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={aboutImg}  width={420} alt="about"/>
            </div>
        </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            
            
             className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start mt-10">
                    <p className='my-4 max-w-xl py-8'>{ABOUT_TEXT}</p>
                </div>
             </motion.div>
    </div>
    </div>
  )
}
