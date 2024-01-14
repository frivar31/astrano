import React from 'react'
import './Form.scss'
<script src="https://web3forms.com/client/script.js" async defer></script>

function Form() {
    
  return (
      
    <div className='form-section'>
        <div className='form-details'>
            <form action="https://api.web3forms.com/submit" method="POST">                
                <span>Leave a message</span>
                <h2> We love to hear from you!</h2>                
                <input type='text' placeholder='Name'required></input>
                <input type='text' placeholder='E-mail' required></input>
                <input type='text' placeholder='Subject'required></input>
                <textarea name='' id='' cols='30' rows='10' placeholder='Message'></textarea>
                
                <button type="submit" className='button'
                onClick={(event) => {
                    // // stop the browser from changing the URL and requesting the new document
                    // event.preventDefault();
                    // push an entry into the browser history stack and change the URL
                    window.history.pushState({}, undefined, "/contact");
                  }}
                
                >Submit</button>
                <input type="hidden" name="access_key" value="c020aaa7-e635-4b4f-82a4-7a31d97d517e"></input>
            </form>
        </div>
        <div className='form-people'>
            <div>
                <img src='assets/slider-img-1.jpg' alt=''/>
                <p>
                    <span>John Doe</span>
                    Senior Marketing Manager<br/> 
                    Phone: 000 1234 5521<br/> 
                    email: contact@emaple.com
                </p>
            </div>
            <div>
                <img src='assets/slider-img-2.jpg' alt=''/>
                <p>
                    <span>John Doe</span>
                    Senior Marketing Manager<br/> 
                    Phone: 000 1234 5521<br/> 
                    email: contact@emaple.com
                </p>
            </div>
            <div>
                <img src='assets/slider-img-3.jpg' alt=''/>
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