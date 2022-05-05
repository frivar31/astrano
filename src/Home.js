import React from 'react'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Portfolio/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home