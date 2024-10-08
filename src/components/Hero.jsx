import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/dev-ed-wave.png"
import { motion } from "framer-motion";

const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  }

})


export default function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div className="flex flex-wrap justify-center lg:justify-between">
      <div className="w-full lg:w-1/2 max-sm:mr-[40px]">
        <div className="flex flex-col items-center lg:items-start sm:ml-0 ml-12">
          <motion.h1 
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className='pb-16 text-5xl sm:text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-center lg:text-left'>
            Aditya Sharma
          </motion.h1> 
          <motion.span
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent text-center lg:text-left'>
            Full Stack Wizard
          </motion.span>
          <motion.p
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tight text-center lg:text-left max-sm:w-80'>
            {HERO_CONTENT}
          </motion.p> 
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center lg:justify-start">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic} 
            className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto ml-0 max-sm:ml-[10px]" 
            alt="profile"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
