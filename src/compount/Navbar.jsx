import React from 'react'
import { IoLeaf } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { motion, AnimatePresence } from 'framer-motion';
import { GrClose } from "react-icons/gr";
import ResponsiveMenu from './ResponsiveMenu';
import { div } from 'motion/react-client';
const NavbarMenu = [
    {
        id: 1,
        title:"Home",
        link:"/",
    },
     {
        id: 2,
        title:"Product",
        link:"#",
    },
     {
        id: 3,
        title:"About",
        link:"#",
    },
     {
        id: 4,
        title:"Shop",
        link:"#",
    },
     {
        id: 5,
        title:"Contacts",
        link:"/contacts",
    },
  
]

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <>
    <motion.nav
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
    >
        <div 
        className=" flex justify-between items-center py-6 px-40 text-2xl
        ">
            <motion.div 
             variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0  },
              }}
               transition={{ duration: 0.9 }}
            className='flex gap-2 font-bold font-5xl items-center uppercase'>
                <p className='text-pink-500'>FRUIT</p>
               <p className='text-yellow-500'>STORE</p>
               <IoLeaf className='text-green-500'/>
            </motion.div>
            {/* menu section */}
            <motion.div
             variants={{
                hidden: { opacity: 0, x: 80 },
                visible: { opacity: 1,x: 0 },
              }}
               transition={{ duration: 0.8 }}
             className='md:block hidden'>
                <ul className="flex  gap-9 font-2xl text-gray-500 ">
                    {NavbarMenu.map((item) => (
                        <li key={item.id} className='test-4xl'>
                           <a href = {item.link}  className='inline-block py-1 px-3 hover:text-pink-500 hover:shadow-[0_3px_5px_-1px_rgba(236,72,153,1)] duration-300'>
                            {item.title}</a>
                        </li>
                    ))}
                        <button className='p-3 hover:text-white text-gray-500 hover:bg-pink-500 hover:shadow-[0_3px_5px_-1px_gray] rounded-full duration-500'><FaCartShopping /></button>

                </ul>

            </motion.div>
{/* mobile menu section */}
<div className='md:hidden' onClick={() =>
    setOpen(!open)}>
<AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <GrClose className="text-4xl" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8}}
            transition={{ duration: 0.3 }}
          >
            <TfiMenu className="text-4xl" />
          </motion.div>
        )}
      </AnimatePresence>
    

    </div>
        </div>
        
    </motion.nav>
    <ResponsiveMenu open={open} />
    </>
  );
}

export default Navbar
