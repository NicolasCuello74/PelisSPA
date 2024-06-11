import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import CardFavorites from '../components/CardFavorites'
import NoFavorites from '../components/NoFavorites'
import addOrRemoveFromFavs from '../utils/addOrRemoveFromFavs'
import getFavoritesLocalStorage from '../utils/getFavoritesLocalStorage'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`)
    } else {
      const favInLocal = getFavoritesLocalStorage()
      setFavorites(favInLocal)
    }
    console.log(favorites)
  }, [isAuthenticated, navigate])

  const handleClicks = (movie) => {
    console.log('se esta ejecutando el click')
    const updatedFavorites = addOrRemoveFromFavs(movie)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <div className="row">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        favorites.map((oneMovie, idx) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 h-auto mt-2 d-flex"
            key={idx}
          >
            <CardFavorites
              addOrRemoveFromFavs={handleClicks}
              card={{
                image: oneMovie.image
                  ? `https://image.tmdb.org/t/p/original${oneMovie.image}`
                  : 'https://res.cloudinary.com/decdqjawu/image/upload/t_Banner 16:9/v1714514493/Captura_de_pantalla_2024-04-30_184335_wxyiro.png',
                title: oneMovie.title,
                description: oneMovie.description ? (
                  oneMovie.description.substring(0, 150)
                ) : (
                  <p>
                    You can search for the description on the internet using the
                    movie title.
                  </p>
                ),
                id: oneMovie.id,
              }}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default Favorites
