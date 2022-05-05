import React from 'react'
import { Link } from 'react-router-dom'

function HeaderList({id, title,active, setSelected}) {
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