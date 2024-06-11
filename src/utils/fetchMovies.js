import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const fetchMovies = async (
  page,
  setApiData,
  setTotalPages,
  isAuthenticated,
  navigate
) => {
  if (!isAuthenticated) {
    navigate(`/`)
    return
  }
  try {
    const response = await axios.get(
      `${process.env.URL}?api_key=${process.env.KEY}&page=${page}`
    )
    setApiData(response.data.results)
    setTotalPages(response.data.total_pages)
  } catch (error) {
    MySwal.fire(<h2>Hubo errores, intenta más tarde</h2>)
  }
}

export default fetchMovies
