import React from 'react'
import Fruit1 from "../assets/apple.png"
import Fruit2 from "../assets/avocado.png"
import Fruit3 from "../assets/orange.png"
import Fruit4 from "../assets/cherry.png"
import { motion } from 'framer-motion';

const menuData = [
    {
        id:1,
        title:"Fresh Apple",
        link:"/",
        price:"$4.00",
        img:Fruit1,
        delay:1,
    },
      {
        id:2,
        title:"Fresh Apple",
        link:"/",
        price:"$4.00",
        img:Fruit2,
         delay:2,
    },
      {
        id:3,
        title:"Fresh Apple",
        link:"/",
        price:"$4.00",
        img:Fruit3,
         delay:3,
    },
      {
        id:4,
        title:"Fresh Apple",
        link:"/",
        price:"$4.00",
        img:Fruit4,
         delay:4,
    },
  
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // 👈 Auto delay between children
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0,x: 300 },
  visible: { opacity: 1, x: 0 },
};

const Section1 = () => {
  return (
    <section>
        <div className="container  mx-0 md:mx-40 ">
            <h1
              className='text-2xl font-bold  uppercase md:text-left text-center pb-20'>Our Menu</h1>
            <motion.div
             variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
             className=' items-center gap-16 justify-center  md:flex mb-10'>
                
              {menuData.map((item,index) => (
            <motion.div key={item.id} 
            variants={fadeInUp}
     transition={{duration:0.2, delay: index * 0.2 }} 
            className="flex gap-7 justify-between mb-5 bg-white rounded-3xl px-8 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] transform transition-transform duration-300 hover:scale-105">
                <img src={item.img} alt="" className='w-[60px]'/>
                <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-500">{item.price}</p>
              <a href={item.link} className="text-pink-500 text-sm">Order Now</a>
                </div>
              
            </motion.div>
          ))}
            </motion.div>
        </div>
    </section>
  )
}

export default Section1
