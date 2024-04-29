import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div class="navbar bg-primary" data-bs-theme="dark">
      <header>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Fav">Favoritos</Link>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default NavBar
