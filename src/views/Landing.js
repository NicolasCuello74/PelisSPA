import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/Landing.css'

function Landing() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()
  return isAuthenticated ? (
    navigate('/home')
  ) : (
    <div className="landing-page">
      <div className="background-video">
        <video autoPlay loop muted>
          <source src="path-to-your-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center">
        <motion.h1
          className="text-light mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenidos a
        </motion.h1>
        <motion.h2
          className="text-light mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tu Portal de Películas Favoritas
        </motion.h2>
        <motion.button
          className="btn btn-dark"
          onClick={() => loginWithRedirect()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Loguearse
        </motion.button>
      </div>
    </div>
  )
}

export default Landing
