import React from 'react'
import '../css/App.css'

const NoFavorites = () => {
  return (
    <div className="p-4 no-favorites-container">
      <div className="animation-container">
        <div className="animation-circle"></div>
        <div className="animation-circle"></div>
        <div className="animation-circle"></div>
      </div>
      <h2 style={{ color: '#e1051b' }}>There are no favorites to display</h2>
    </div>
  )
}

export default NoFavorites
