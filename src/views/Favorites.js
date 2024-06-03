import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import CardFavorites from '../components/CardFavorites'
import NoFavorites from '../components/NoFavorites'

const Favorites = ({ addOrRemoveFromFavs }) => {
  const [favorites, setFavorites] = useState([])
  const [fav, setFav] = useState(true)
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate(`/`)
    }
    const favInLocal = localStorage.getItem('fav')
    if (favInLocal) {
      try {
        const favsArray = JSON.parse(favInLocal)
        setFavorites(favsArray)
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error)
      }
    }
  }, [setFavorites, isAuthenticated, navigate])

  const handleClicks = (movie) => {
    const updatedFavorites = addOrRemoveFromFavs(movie)
    setFav(!fav)
    setFavorites(updatedFavorites)
    localStorage.setItem('fav', JSON.stringify(updatedFavorites))
  }

  console.log(favorites)

  return (
    <>
      <div className="row">
        {favorites.length === 0 ? (
          <NoFavorites />
        ) : (
          favorites.map((oneMovie, idx) => (
            <div className="col-3 p-3 h-auto mt-2 d-flex" key={idx}>
              <CardFavorites
                addOrRemoveFromFavs={handleClicks}
                card={{
                  image: oneMovie.img
                    ? `https://image.tmdb.org/t/p/original${oneMovie.img}`
                    : 'https://res.cloudinary.com/decdqjawu/image/upload/t_Banner 16:9/v1714514493/Captura_de_pantalla_2024-04-30_184335_wxyiro.png',
                  title: oneMovie.titleElement,
                  description: oneMovie.overview ? (
                    oneMovie.overview.substring(0, 150)
                  ) : (
                    <p>
                      You can search for the description on the internet using
                      the movie title.
                    </p>
                  ),
                  id: oneMovie.id,
                }}
              />
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Favorites
