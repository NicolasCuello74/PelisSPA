import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  return isAuthenticated ? (
    navigate('/home')
  ) : (
    <div className="landing-page">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/decdqjawu/image/upload/v1714514493/Captura_de_pantalla_2024-04-30_184335_wxyiro.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '78vh',
        }}
      >
        <div className="overlay"></div>
        <div className="container h-100 d-flex flex-column justify-content-around">
          <h1 className="text-center text-light mb-4">Bienvenidos a</h1>
          <h2 className="text-center text-light mb-4">
            Loguearse para buscar peliculas
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Landing
