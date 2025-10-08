import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutUs from '../Components/About/AboutBanner';
import About from '../Components/About';
import AboutImages from '../Components/About/AboutImages';
import WhoWeAre from '../Components/About/AboutText';
import CallToAction from '../Components/About/CallToAction';

const Page = () => {
  return (
    <div>
        <Header/>
        <AboutUs/>
        <AboutImages/>
        <WhoWeAre/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Page;