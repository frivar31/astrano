import React from 'react'
import './Form.scss'
function Form() {
  return (
      <div className='form-section'>
    <div className='form-details'>
        <form action=''>
            <span>Leave a message</span>
            <h2> We love to hear from you</h2>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='E-mail'></input>
            <input type='text' placeholder='Subject'></input>
            <textarea name='' id='' cols='30' rows='10' placeholder='Message'></textarea>
            <button>Submit</button>
        </form>
    </div>
    <div className='people'>
        <div>
            <img src='assets/'
        </div>
    </div>
    </div>
  )
}

export default Form