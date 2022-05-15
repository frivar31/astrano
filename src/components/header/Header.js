import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Header.scss'

function Header() {
  // const [selected, setSelected] = useState("/");
  let location = useLocation();
  console.log('this is pathname', location.pathname);

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


  // persisting useState via localStorage

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('id'))
  //   console.log('data 1 = ', data)
  //   if (data) {
  //     console.log('if statement working!')

  //     setSelected(data);
  //   }
  //   console.log('this is selected = ', selected)
  // }, []);


  // useEffect(() => {

  //   const data = JSON.stringify(selected)
  //   console.log('data 2 = ', data)
  //   localStorage.setItem('id', data);

  //   console.log('what data 1 should be : ', localStorage.getItem('id'))
  // }, [selected]);



  return (
    <div className='header'>
      <Link to="/"> <img src='assets/new-astrano-logo.png' alt='' className='header-logo' /> </Link>
      <div className='nav-links'>
        <ul className='nav-bar'>
          {list.map((item) => (
            <li key={item.id}>
              <Link
                className={location.pathname === item.id ? "active" : ""}
                // onClick={() => {

                   // setSelected(item.id)
                // }}
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