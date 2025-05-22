import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Servicess/Services'
import Features from '../components/Feature/Features'
import Pricing from '../components/Price/Pricing'
import Reviews from '../components/Reviews'
import Trial from '../components/Trial'
import Footer from '../components/Footer'
import Banner from '../components/Banner/Banner'

const Home = () => {
  return (
     <div className="bg-black overflow-hidden">
      <Navbar />
      <Banner/>
      <Services />
      <Features/>
      <Pricing/>
      <Reviews/>
      <Trial/>
      <Footer/>
    </div>
  )
}

export default Home
