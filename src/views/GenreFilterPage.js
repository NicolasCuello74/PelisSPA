import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import fetchGenres from '../utils/fetchGenres'
import Genres from '../components/Genres'
import CustomCard from '../components/CustomCard'
import axios from 'axios'
import Swal from 'sweetalert2'

const GenreFilterPage = ({ addOrRemoveFromFavs }) => {
  const { genreId } = useParams()
  const [selectedGenre, setSelectedGenre] = useState(genreId || null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [genreMovies, setGenreMovies] = useState([])
  const [genres, setGenres] = useState([])
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const fetchMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_URL}?api_key=${process.env.REACT_APP_KEY}&with_genres=${selectedGenre}&page=${currentPage}`

      const response = await axios.get(url)
      setGenreMovies(response.data.results)
      setTotalPages(response.data.total_pages)
    } catch (error) {
      console.error('Error:', error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al cargar las películas. Por favor, inténtalo de nuevo más tarde.',
      })
    }
  }
  useEffect(() => {
    if (selectedGenre) {
      fetchMovies()
    }
  }, [selectedGenre, currentPage])

  useEffect(() => {
    fetchGenres(isAuthenticated, navigate, setGenres)
  }, [isAuthenticated, navigate])

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId)
    setCurrentPage(1)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
    console.log(currentPage)
  }
  const handleClicks = (movie) => {
    addOrRemoveFromFavs(movie)
  }

  return (
    <div>
      <Genres genres={genres} onGenreClick={handleGenreClick} />
      <div className="row">
        {genreMovies.map((oneMovie, idx) => (
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

export default GenreFilterPage
