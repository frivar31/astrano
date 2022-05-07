import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
        <Link to="/"> <img src='assets/new-astrano-logo.png' alt='' className='header-logo' /> </Link>

          <div className='nav-links'>
          <ul className='nav-bar'> 
          {list.map( (item) => (

            <HeaderList 
              title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected} 
              id={item.id}
              selected={selected}
            />

          ))}
          </ul>
        </div>

        
         <Link to='/training'><button className='button'> Training Astral </button></Link>
    </div>
  )
}

export default Header