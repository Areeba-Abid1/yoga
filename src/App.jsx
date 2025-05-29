import React from 'react'
import Navbar from './compount/Navbar'
import Hero from './compount/Hero'
import Section1 from './compount/Section1'
import Section2 from './compount/Section2'
import Section3 from './compount/Section3'
import Section4 from './compount/Section4'
import Footer from './compount/Footer'

const App = () => {
  return (
    <>
    <main className='overfloe-x-hidden'>
  <Navbar/>
  <Hero/>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Footer/>
    </main>
    
    </>
  )
}

export default App
