// images from https://www.svgrepo.com/

import React from 'react'
import './ContactHero.scss'

function ContactHero() {
  return (
    <div className='contact-section'>
        <div className='contact-details'>
            <span>Get In Touch !</span>
            <h2>Visit one of our agency location or contact us today! </h2>
            <h2> Head office </h2>
            <li className='contact-list'>
                <img src='./assets/map.svg'/>
                <h4># example street 401 302 Calgary, AB</h4>    
            </li>
            <li className='contact-list'>
                <img src='./assets/email.svg'/>
                <h4>contact@example.com</h4>    
            </li>
            <li className='contact-list'>
                <img src='./assets/phone.svg'/>
                <h4>403 123 4567</h4>
            </li>
            <li className='contact-list'>
                <img src='./assets/clock.svg'/>
                <h4> Monday to Friday 9:00am - 4:00pm MST </h4>
            </li>
        </div>
        <div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40131.57430982944!2d-114.10308675310706!3d51.04896277638046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffb86200597%3A0x10c42af1e7df241e!2sDowntown%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1651789023132!5m2!1sen!2sca" width="600" height="450" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  )
}

export default ContactHero