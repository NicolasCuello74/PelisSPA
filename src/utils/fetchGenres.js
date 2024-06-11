import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const fetchGenres = async (isAuthenticated, navigate, setGenres) => {
  if (!isAuthenticated) {
    navigate(`/`)
    return
  }
  try {
    const response = await axios.get(
      `${process.env.URL_GENRE}?api_key=${process.env.KEY}`
    )
    setGenres(response.data.genres)
  } catch (error) {
    MySwal.fire(<h2>Hubo errores, intenta más tarde</h2>)
  }
}

export default fetchGenres
