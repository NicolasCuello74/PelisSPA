import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ButtonLogin from './ButtonLogin'
import ButtonLogout from './ButtonLogout'
import swAlert from '@sweetalert/with-react'
import { useAuth0 } from '@auth0/auth0-react'

function NavBar() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

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

  return (
    <>
      <div className="container mb-5">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              {!isAuthenticated ? (
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              ) : (
                <ul />
              )}
              {isAuthenticated ? (
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Peliculas
                </Link>
              ) : (
                <ul />
              )}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isAuthenticated ? (
                  <li className="nav-item">
                    <Link to="/Favoritos" className="nav-link">
                      Favorites
                    </Link>
                  </li>
                ) : (
                  <ul />
                )}
                <li className="nav-item">
                  <Link to="/AboutMe" className="nav-link" aria-disabled="true">
                    About Me
                  </Link>
                </li>
              </ul>
              <form
                id="forms"
                className="btn-group"
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
                <button className="btn btn-primary active" type="submit">
                  Search
                </button>
              </form>

              <ButtonLogin />
              <ButtonLogout />
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
