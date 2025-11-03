import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ButtonLogin from '../components/ButtonLogin'
import ButtonRegister from '../components/ButtonRegister'
import '../css/App.css'

function Landing() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  return isAuthenticated ? (
    navigate('/home')
  ) : (
    <div id="landing-page" className="d-flex pt-5 bg-opacity-25 bg-black">
      <div className="container w-50 d-flex flex-column justify-content-center align-items-center text-center">
        <div className="d-flex">
          <motion.h1
            className="text-light mb-4"
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            Tu Portal de Películas Favoritas
          </motion.h1>
        </div>
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex gap-4 align-content-center flex-column">
            <ButtonLogin />
            <p className="text-light">Ó</p>
            <ButtonRegister />
          </div>
        </div>
      </div>
      <div className="landing-page w-50 opacity-75">
        <img
          src="https://res.cloudinary.com/decdqjawu/image/upload/v1751337027/ChatGPT_Image_30_jun_2025_11_27_05_p.m._xew21i.png"
          alt="Landing"
          className="img-fluid h-100 "
        />
      </div>
    </div>
  )
}

export default Landing
