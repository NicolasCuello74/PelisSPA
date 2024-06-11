import axios from 'axios'
import Swal from 'sweetalert2'

const fetchMoviesByGenre = async (
  setGenreMovies,
  page,
  setTotalPages,
  genreId
) => {
  try {
    const url = `${process.env.REACT_APP_URL}?api_key=${process.env.REACT_APP_KEY}&with_genres=${genreId}&page=${page}`

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

export default fetchMoviesByGenre
