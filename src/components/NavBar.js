import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ButtonLogout from './ButtonLogout'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'react-bootstrap'
import fetchGenres from '../utils/fetchGenres'
import Genres from './Genres'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../css/App.css'
const MySwal = withReactContent(Swal)

function NavBar() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const [genres, setGenres] = useState([])
  const location = useLocation()

  useEffect(() => {
    // Rutas donde se muestre el selector de generos
    const showGenres = ['/home', '/Search', '/genre/:genreId']
    if (showGenres.some((path) => location.pathname.startsWith(path))) {
      fetchGenres(isAuthenticated, navigate, setGenres)
    }
  }, [location.pathname, isAuthenticated, navigate])

  const handleInputChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      return MySwal.fire(<h6>Debes estar logueado</h6>)
    } else if (searchTerm.trim().length === 0) {
      return MySwal.fire(<h6>Debes introducir una palabra clave</h6>)
    } else {
      navigate(`/Search?palabra=${searchTerm}`)
      setSearchTerm('')
    }
  }

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-md bg-body-tertiary fixed-top"
      style={{ maxWidth: '100vw' }}
    >
      <div class="container-fluid" role="navigation">
        {isAuthenticated ? (
          <>
            <div className="d-flex" style={{ width: '50%', height: 'auto' }}>
              <Link
                to="/home"
                className="nav-link active"
                aria-current="page"
                style={{ marginRight: '10px' }}
              >
                <img
                  src="https://res.cloudinary.com/decdqjawu/image/upload/v1751560640/Dise%C3%B1o_sin_t%C3%ADtulo_3_kqzh3a.png"
                  alt="logo"
                  className="navbar-logo"
                />
              </Link>
              <Genres
                genres={genres}
                onGenreClick={(id) => navigate(`/genre/${id}`)}
              />
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
            </div>
            <div
              className={`collapse navbar-collapse justify-content-end ${
                menuOpen ? 'show' : ''
              }`}
              style={{ width: '50%', height: 'auto' }}
              id="navbarTogglerDemo01"
              role="navigation"
            >
              <ul className="navbar-nav flex-column flex-md-row align-items-end ms-auto gap-2">
                <li className="nav-item"></li>
                <li className="nav-item">
                  <Link to="/Favoritos" className="my-3 w-100">
                    <Button variant="secondary" size="sm" type="submit">
                      Favoritos
                    </Button>
                  </Link>
                </li>
                <li className="nav-item">
                  <ButtonLogout />
                </li>
                <li className="nav-item">
                  <form
                    id="forms"
                    className="nav-item d-flex align-items-center gap-2"
                    role="search"
                    onSubmit={handleSearch}
                  >
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Buscar..."
                      aria-label="Search"
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                  </form>
                </li>
                <li>
                  <Button
                    style={{ width: '100px' }}
                    variant="secondary"
                    size="sm"
                    type="submit"
                    onClick={handleSearch}
                  >
                    Buscar
                  </Button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <img
            src="https://res.cloudinary.com/decdqjawu/image/upload/v1751560640/Dise%C3%B1o_sin_t%C3%ADtulo_3_kqzh3a.png"
            alt="logo"
            className="navbar-logo"
          />
        )}
      </div>
    </nav>
  )
}

export default NavBar
