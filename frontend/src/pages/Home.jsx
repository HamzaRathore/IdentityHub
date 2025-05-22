import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Services from '../components/Services'
import ChooseUs from '../components/Features'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Trial from '../components/Trial'
import Footer from '../components/Footer'

const Home = () => {
  return (
     <div className="bg-black overflow-hidden">
      <Navbar />
      <Banner />
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
