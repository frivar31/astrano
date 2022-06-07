import React from 'react'
import './Checkout.scss'

function Checkout() {
  return (
    <div className='checkout-form'>
        <h1>Checkout</h1>
        <form>
            <input className='checkout-input' placeholder='Donation Amount' ></input>
            <button className='checkout-button'>pay</button>
        </form>
    </div>
  )
}

export default Checkout