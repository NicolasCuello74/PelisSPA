import React, { useEffect } from 'react'
import CustomCard from '../components/CustomCard'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Pagination from '../components/Pagination'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
const { REACT_APP_KEY } = process.env
const MySwal = withReactContent(Swal)
const Buscador = () => {
  const [searchResults, setSearchResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const palabra = queryParams.get('palabra')

  useEffect(() => {
    const endpoint = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_KEY}&query=${palabra}&page=${currentPage}`
        )
        setSearchResults(response.data.results)
        setTotalPages(response.data.total_pages)
      } catch (error) {
        MySwal.fire(<h2>Hubo errores intenta más tarde</h2>)
      }
    }
    endpoint()
  }, [location.search, currentPage])
  const favMovies = localStorage.getItem('fav')
  let tempMovieInFavs

  if (favMovies === null) {
    tempMovieInFavs = []
  } else {
    tempMovieInFavs = JSON.parse(favMovies)
  }

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget
    const parent = btn.parentElement
    const img = parent.querySelector('img').getAttribute('src')
    const titleElement = parent.querySelector('.card-title').textContent
    const overview = parent.querySelector('p').innerText
    const movieData = {
      id: btn.dataset.movieId,
      img,
      titleElement,
      overview,
    }

    const movieInArray = tempMovieInFavs.find(
      (oneMovie) => oneMovie.id === movieData.id
    )

    if (!movieInArray) {
      tempMovieInFavs.push(movieData)
      localStorage.setItem('fav', JSON.stringify(tempMovieInFavs))
      console.log('Se agregó a favoritos')
    } else {
      tempMovieInFavs = tempMovieInFavs.filter(
        (oneMovie) => oneMovie.id !== movieData.id
      )
      localStorage.setItem('fav', JSON.stringify(tempMovieInFavs))
      console.log('Se eliminó de favoritos')
    }
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="container">
      <div className="row">
        {searchResults.map((movie, index) => (
          <div className="col-3 p-3 h-auto mt-2 d-flex" key={index}>
            <CustomCard
              addOrRemoveFromFavs={addOrRemoveFromFavs}
              card={{
                image: movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  : 'https://res.cloudinary.com/decdqjawu/image/upload/t_Banner 16:9/v1714514493/Captura_de_pantalla_2024-04-30_184335_wxyiro.png',
                title: movie.title,
                description: movie.overview ? (
                  movie.overview.substring(0, 150)
                ) : (
                  <p>
                    You can search for the description on the internet using the
                    movie title.
                  </p>
                ),
                id: movie.id,
              }}
            />
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Buscador
