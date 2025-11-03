import React from 'react'
import '../css/App.css'

const NoFavorites = () => {
  return (
    <div className="p-4 no-favorites-container d-flex justify-content-center">
      <div className="animation-circle"></div>
      <div className="animation-circle"></div>
      <div className="animation-circle"></div>
      <h2 style={{ color: '#e1051b' }}>No hay favoritos para mostrar</h2>
    </div>
  )
}

export default NoFavorites
