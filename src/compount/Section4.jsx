import banner from "../assets/banner-bg.jpg"
import React from 'react'

const Section4 = () => {
  return (
  <section>
<div className="h-[85vh] w-full overflow-scroll">
  <div
    className="sticky top-20 h-[70vh] w-[70%] mx-auto flex items-center justify-end     bg-black bg-opacity-50 rounded-lg p-12"
    style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    <div className="h-[350px] w-[600px]">
 <h1 className="font-bold text-2xl py-6">BRAND INFO</h1>
 <p className="font-medium text-gray-400 pb-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus reiciendis repellendus sit expedita. Provident aspernatu
    r, in, libero ab ducimus blanditiis ut, nam Numquam <br/><br/>voluptatibus reiciendis repellendus sit expedita. Provident aspernatu
    r, in, libero ab ducimus blanditiis ut, odio quae nemo quia voluptatum expedita repellendus.</p>
    <button className='bg-pink-500 text-white font-semibold p-3 rounded shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 flex items-center gap-8'>Order now</button>
    </div>
  </div>
</div>

 

  </section>
  )
}

export default Section4
