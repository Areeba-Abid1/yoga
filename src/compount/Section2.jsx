import React from 'react'
import splash from "../assets/fruits-splash.png"
import { motion, scale} from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1,scale: 1 },
};

const fadeIny = {
  hidden: { opacity: 0, y:30 },
  visible: { opacity: 1, y:0 },
};
const buttone ={
    hidden:{opacity:0, scale:0},
    visible:{opacity:1, scale:1}
}


const Section2 = () => {
  return (
    <section>
        <div className=' bg-[#FFF4EB] min-h-[70vh] px-90 '>
     <motion.div 
      initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={containerVariants}
      className=" flex flex-col md:flex-row items-center justify-center gap-5 md:gap-50">
        <motion.div className='w-[200px] md:w-[400px] '
        variants={fadeInUp}
         transition={{ type:"spring", stiffness:100, delay:0.2 }}
       >
            {/* image */}
            <img src={splash} alt="splash" className='drop-shadow-2xl'/>
        </motion.div>
        <div  className=' w-[300px] '>
            {/* text */}
           
            <motion.h1
             variants={fadeIny}
            transition={{ duration: 0.4 }}
            className=' py-4 text-2xl tracking-wide  font-bold'
            >BRAND INFO</motion.h1>
            <motion.p
             variants={fadeIny}
             transition={{ duration: 0.4 }}
             className='py-4 text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta fuga , pariatur beatae in? Incidunt asperiores perspiciatis porro inventore sit quis
                olor sit amet<br/><br/>  consectetur adipisicing elit.Dicta fuga nostrum soluta fugit, debitis excepturi auts perspiciatis porro inventore sit quis ea.</motion.p>
            <motion.button  
           variants={buttone}
             transition={{ duration: 0.1 }}
            className='bg-pink-500 text-white font-semibold p-3 rounded shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 flex items-center gap-2'>Order now</motion.button>
        </div>
     </motion.div>
    </div>
    </section>
    
  )
}

export default Section2
