import { section } from 'motion/react-client'
import React from 'react'
import { BsHandbagFill } from "react-icons/bs";
import Heroimg from "../assets/fruit-plate.png"
import Leafimg from "../assets/leaf.png"
import { motion} from 'framer-motion';


const Hero = () => {
  return (
   <section>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] mx-0 md:mx-40 relative">
        {/* brend info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
            <motion.div 
               initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                 
                },
              },
            }}
            className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <motion.h1 
                  variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
               transition={{ duration: 0.8 }}
                className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>Healthy
                <br/>
                Fresh<span 
                 className='text-yellow-500'>Fruit</span></motion.h1>
                <motion.p
                variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
               transition={{ duration: 0.6 }}
                className='text-2xl tracking-wide'>Order now for fresh and healthy <br/>life</motion.p>
                <motion.p
                 variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
               transition={{ duration: 0.6 }}
                 className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. soluta minima quasi reprehenderit ea?
dolor sit amet consectetur adipisicing elit. soluta minima quasi reprehenderit ea?
                </motion.p>
                {/* button section */}
               <motion.div 
                  variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
               transition={{ duration: 0.6 }}
               className=' flex justify-center md:justify-start'> 

                <button className='bg-pink-500 text-white font-semibold p-3 rounded shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 flex items-center gap-2'> <BsHandbagFill /> Order now</button>
                </motion.div>
               
                  
            </motion.div>
        </div>
        {/* hero image */}
         <div className='flex justify-center items-center'>
                    <motion.img src={Heroimg} alt="" 
                    initial={{opacity :0, x:200 , rotate:25}}
                    animate = {{opacity :1, x:0, rotate:0}}
                    transition={{duration:1 , delay:0.2}}

                    className='w-[400px] md:w-[650px] drop-shadow-[-6px_8px_15px_rgba(0,0,0,0.4)]'/>
                   </div>
                   {/* leaf image */}
                   <motion.div 
                   initial={{ opacity: 0, y: -90, rotate: -45 }}
          animate={{ opacity: 0.8, y: 0, rotate: 90 }}
          transition={{ duration: 1, delay: 0.5 }}
                   className='absolute top-[40px] left-[300px] opacity-80 rotate-45 blur-sm'>
                    <img src={Leafimg} alt="" className='w-full md:max-w-[300px]'/>
                   </motion.div>
    </div>
   </section>
  )
}

export default Hero
