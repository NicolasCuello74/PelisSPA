import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagramSquare,
  faSquareGithub,
  faLinkedin,
  faSquareWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="container p-1 mb-0 text-info-emphasis">
      <nav className="bg-body-tertiary">
        <ul className="list-unstyled d-flex justify-content-around align-items-center">
          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://www.instagram.com/nicocuello74/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramSquare} bounce /> Instagram
            </a>
          </li>
          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://github.com/NicolasCuello74"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareGithub} bounce />
              GitHub
            </a>
          </li>
          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://wa.me/543516575438"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} bounce />
              Whatsapp
            </a>
          </li>

          <li className="m-3 fs-3">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/nicolascuello/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} bounce />
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center">Copyright Alkemy Challenge</p>
    </footer>
  )
}

export default Footer
