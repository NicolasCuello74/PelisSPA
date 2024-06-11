import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import CustomCard from '../components/CustomCard'
import Pagination from '../components/Pagination'
import fetchMovies from '../utils/fetchMovies'
import fetchGenres from '../utils/fetchGenres'
import Genres from '../components/Genres'
import getFavoritesLocalStorage from '../utils/getFavoritesLocalStorage'
import addOrRemoveFromFavs from '../utils/addOrRemoveFromFavs'

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [apiData, setApiData] = useState([])
  const [genres, setGenres] = useState([])
  const [favorites, setFavorites] = useState([])
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    fetchGenres(isAuthenticated, navigate, setGenres)
    fetchMovies(
      currentPage,
      setApiData,
      setTotalPages,
      isAuthenticated,
      navigate
    )

    const favs = getFavoritesLocalStorage()
    setFavorites(favs)
  }, [currentPage, isAuthenticated, navigate])

  const handleClicks = (movie) => {
    const updatedFavorites = addOrRemoveFromFavs(movie)
    setFavorites(updatedFavorites)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleGenreClick = async (genreId) => {
    console.log('Genre clicked:', genreId)
    navigate(`/genre/${genreId}`)
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-content-center align-items-center mb-3">
        <Genres genres={genres} onGenreClick={handleGenreClick} />
      </div>
      <div className="row">
        {apiData.map((oneMovie, idx) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 h-auto mt-2 d-flex"
            key={idx}
          >
            <CustomCard
              addOrRemoveFromFavs={handleClicks}
              card={{
                image: oneMovie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${oneMovie.backdrop_path}`
                  : 'https://res.cloudinary.com/decdqjawu/image/upload/t_Banner 16:9/v1714514493/Captura_de_pantalla_2024-04-30_184335_wxyiro.png',
                title: oneMovie.title,
                description: oneMovie.overview ? (
                  oneMovie.overview.substring(0, 150)
                ) : (
                  <p>
                    You can search for the description on the internet using the
                    movie title.
                  </p>
                ),
                id: oneMovie.id,
                isFavorite: favorites.some((fav) => fav.id === oneMovie.id),
              }}
            />
          </div>
        ))}
        <div className="d-flex justify-content-center mt-3">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
