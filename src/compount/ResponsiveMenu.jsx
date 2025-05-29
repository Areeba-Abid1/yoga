import React from 'react'
import { motion , AnimatePresence } from "motion/react"
import { div } from 'motion/react-client'
const ResponsiveMenu = ({open}) => {
  return (
   <AnimatePresence mode='wait'>
  {
    open && (
        <motion.div 
        initial ={{opacity:0, y:-100 }}
        animate ={{ opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.3}}
        className='absolute top-20 left-0 w-full h-screen  z-20'>
            <div className='text-xl font-semibold bg-pink-500 text-white py-10 m-6 rounded-3xl'>
                <ul className='flex flex-col items-center gap-5 '>
                    <li>HOME</li>
                     <li>ABOUT</li>
                      <li>SERVICES</li>
                       <li>CONTACT</li>
                </ul>

            </div>
        </motion.div>
    )
  }

   </AnimatePresence>
  )
}

export default ResponsiveMenu
