import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagramSquare,
  faSquareGithub,
  faLinkedin,
  faSquareWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container p-1 mb-0 text-info-emphasis">
      <nav className="bg-body-tertiary">
        <ul className="list-unstyled d-flex justify-content-around align-items-center">
          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://www.instagram.com/nicocuello.7/"
              rel="noopener noreferrer"
              style={{ color: '#e1051b' }}
            >
              <FontAwesomeIcon
                icon={faInstagramSquare}
                bounce
                style={{ color: '#e1051b' }}
              />{' '}
              Instagram
            </a>
          </li>
          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://github.com/NicolasCuello74"
              rel="noopener noreferrer"
              style={{ color: '#e1051b' }}
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                bounce
                style={{ color: '#e1051b' }}
              />
              GitHub
            </a>
          </li>
          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://wa.me/543516575438"
              rel="noopener noreferrer"
              style={{ color: '#e1051b' }}
            >
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                bounce
                style={{ color: '#e1051b' }}
              />
              Whatsapp
            </a>
          </li>

          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/nicolascuello/"
              rel="noopener noreferrer"
              style={{ color: '#e1051b' }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                bounce
                style={{ color: '#e1051b' }}
              />
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center" style={{ color: '#e1051b' }}>
        © {currentYear} Nicolás Cuello. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
