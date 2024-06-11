import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonLogin from './ButtonLogin'
import ButtonLogout from './ButtonLogout'
import swAlert from '@sweetalert/with-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'react-bootstrap'
import '../css/App.css'

function NavBar() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleInputChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      return swAlert(<h6>Debes estar logueado</h6>)
    } else if (searchTerm.trim().length === 0) {
      return swAlert(<h6>Debes introducir una palabra clave</h6>)
    } else {
      navigate(`/Search?palabra=${searchTerm}`)
      setSearchTerm('')
    }
  }

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="container mb-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarTogglerDemo01"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {!isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
              ) : null}
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Peliculas
                  </Link>
                </li>
              ) : null}
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/Favoritos" className="nav-link">
                    Favorites
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                <Link to="/AboutMe" className="nav-link" aria-disabled="true">
                  About Me
                </Link>
              </li>
            </ul>
            <form
              id="forms"
              className="d-flex"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <Button
                variant="secondary"
                size="mg"
                type="submit"
                style={{ marginRight: '8em' }}
              >
                Search
              </Button>
            </form>
            <div className="d-flex align-items-center ms-2">
              <ButtonLogin />
              <ButtonLogout />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
