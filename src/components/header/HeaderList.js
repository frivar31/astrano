import React from 'react'
import { Link } from 'react-router-dom'

function HeaderList({id, title,active, setSelected, selected}) {

  // persisting useState via localStorage

  // useEffect(() => {
  //   setSelected(JSON.parse(localStorage.getItem('id')))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('id',JSON.stringify(selected))
  // }, [selected])

  return (
    <li>
        <Link
            className={active ? "active" : ""} 
            onClick={() => setSelected(id)}
            to={id}
            
        >
            {title}
        </Link>
    </li>
  )
}

export default HeaderList