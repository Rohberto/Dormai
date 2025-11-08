"use client"
import React, {useEffect, useState} from 'react';
import gsap from 'gsap';
import "./page.css";
import Banner from './Components/Banner';
import Header from './Components/Header';
import StatsSection from './Components/Stats';
import Services from './Components/Services';
import About from './Components/About';
import Works from './Components/Work';
import ClientelePage from './Components/Clientelle';
import Footer from './Components/Footer';
import OurProcess from './Components/Process';
import Testimonials from './Components/Testimonials';

const page = () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  return (
    <div className='homepage'>
      <Header/>
      <Banner/>
      <Services/>
      <Works/>
      <About/>
      <OurProcess/>
      <ClientelePage/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default page;