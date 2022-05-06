import React from 'react'
import Banner from '../components/banner/Banner'
import Hero from '../components/hero/Hero'
import Portfolio from '../components/portfolio/Portfolio'

function Home() {
  return (
     <div>
        <Hero/>
        <Portfolio/>
        <Banner/>
    </div>
  )
}

export default Home