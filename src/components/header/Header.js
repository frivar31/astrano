import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import './Header.scss'

function Header() {
  let location = useLocation();

  const list = [
    {
      id: "/",
      title: 'Home',
    },
    {
      id: "/contact",

      title: 'Contact',
    },
    {
      id: "/about",
      title: 'About',
    },
    {
      id: "/donate",
      title: 'Donate',
    },
  ];


  return (
    <div className='header'>
      <Link to="/"> <img src='assets/new-astrano-logo.png' alt='' className='header-logo' /> </Link>
      <div className='nav-links'>
        <ul className='nav-bar'>
          {list.map((item) => (
            <li key={item.id}>
              <Link
                className={location.pathname === item.id ? "active" : ""}
                to={item.id}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to='/training'><button className='button'> Training Astral </button></Link>
    </div>
  )
}

export default Header