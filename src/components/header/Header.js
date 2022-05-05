import React, { useState } from 'react'
import './Header.scss'
import HeaderList from './HeaderList';


function Header() {
  const [selected, setSelected] = useState('/');

  const list = [
    {
      id: '/',
      title: 'Home',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'donate',
      title: 'Donate',
    },
  ];

  
  return (
    <div className='header'> 
        <a href='index.html'> <img src='assets/new-astrano-logo.png' alt='' className='header-logo' /> </a>

        <div className='nav-links'>
          <ul className='nav-bar'> 
          {list.map( (item) => (

            <HeaderList 
              title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected} 
              id={item.id}
            />

          ))}
          </ul>
        </div>

        
         <button className='button'> Training Astral </button>
    </div>
  )
}

export default Header