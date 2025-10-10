import React from 'react'
import WorkBanner from '../Components/Work/WorkBanner'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CallToAction from '../Components/About/CallToAction'
import Works from '../Components/Work/Works'

const page = () => {
  return (
    <div>
        <Header/>
        <WorkBanner/>
        <Works/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default page