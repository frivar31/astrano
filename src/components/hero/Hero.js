import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <div className='hero'>

        <div className='hero-text'>
            <h1>Astrano Self Training</h1>
            <h4>The mind is a very powerful thing we possess and to take care of our mind is an utmost prioity. </h4>
            <button>Begin Your Journey</button>
        </div>

        <div className='hero-img' >
            <img src='assets/meditation.png' alt='' />
        </div>
    </div>
  )
}

export default Hero