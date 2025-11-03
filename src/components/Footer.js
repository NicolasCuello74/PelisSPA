import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagramSquare,
  faSquareGithub,
  faLinkedin,
  faSquareWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import '../css/App.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      id="footer"
      className="footer d-flex flex-column align-items-center bg-black text-light py-4 mt-2"
    >
      <ul className="list-unstyled d-flex justify-content-evenly gap-3">
        <li className="d-flex m-3 fs-3">
          <a
            className="d-flex align-items-center nav-link gap-2"
            href="https://www.instagram.com/nicocuello.7/"
            rel="noopener noreferrer"
            style={{ color: '#ededed' }}
          >
            <FontAwesomeIcon
              icon={faInstagramSquare}
              bounce
              style={{ color: '#ededed' }}
            />{' '}
            Instagram
          </a>
        </li>
        <li className="d-flex m-3 fs-3">
          <a
            className="d-flex align-items-center nav-link gap-2"
            href="https://github.com/NicolasCuello74"
            rel="noopener noreferrer"
            style={{ color: '#ededed' }}
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              bounce
              style={{ color: '#ededed' }}
            />
            GitHub
          </a>
        </li>
        <li className="d-flex m-3 fs-3">
          <a
            className="d-flex align-items-center nav-link gap-2"
            href="https://wa.me/543516575438"
            rel="noopener noreferrer"
            style={{ color: '#ededed' }}
          >
            <FontAwesomeIcon
              icon={faSquareWhatsapp}
              bounce
              style={{ color: '#ededed' }}
            />
            Whatsapp
          </a>
        </li>

        <li className="d-flex m-3 fs-3">
          <a
            className="d-flex align-items-center nav-link gap-2"
            href="https://www.linkedin.com/in/nicolascuello/"
            rel="noopener noreferrer"
            style={{ color: '#ededed' }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              bounce
              style={{ color: '#ededed' }}
            />
            Linkedin
          </a>
        </li>
      </ul>
      <p className="text-center" style={{ color: '#ededed' }}>
        © {currentYear} Nicolás Cuello. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
