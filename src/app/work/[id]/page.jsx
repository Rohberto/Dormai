import CallToAction from '@/app/Components/About/CallToAction'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import WorkDetail from '@/app/Components/Work/WorkDetail'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <WorkDetail/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default page