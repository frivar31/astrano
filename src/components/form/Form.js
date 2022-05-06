import React from 'react'
import './Form.scss'
function Form() {
  return (
    <div className='form-section'>
        <div className='form-details'>
            <form action=''>
                <span>Leave a message</span>
                <h2> We love to hear from you!</h2>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='E-mail'></input>
                <input type='text' placeholder='Subject'></input>
                <textarea name='' id='' cols='30' rows='10' placeholder='Message'></textarea>
                <button className='button'>Submit</button>
            </form>
        </div>
        <div className='form-people'>
            <div>
                <img src='assets/slider-img-1.jpg'/>
                <p>
                    <span>John Doe</span>
                    Senior Marketing Manager<br/> 
                    Phone: 000 1234 5521<br/> 
                    email: contact@emaple.com
                </p>
            </div>
            <div>
                <img src='assets/slider-img-2.jpg'/>
                <p>
                    <span>John Doe</span>
                    Senior Marketing Manager<br/> 
                    Phone: 000 1234 5521<br/> 
                    email: contact@emaple.com
                </p>
            </div>
            <div>
                <img src='assets/slider-img-3.jpg'/>
                <p>
                    <span>John Doe</span>
                    Senior Marketing Manager<br/> 
                    Phone: 000 1234 5521<br/> 
                    email: contact@emaple.com
                </p>
            </div>
        </div>
    </div>
  )
}

export default Form