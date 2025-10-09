import React from 'react'
import ServicesSection from '../Components/Services/ServiceBanner'
import Header from '../Components/Header'
import SignageDesign from '../Components/Services/Services'
import CallToAction from '../Components/About/CallToAction'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Header/>
        <ServicesSection/>
        <SignageDesign/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default page