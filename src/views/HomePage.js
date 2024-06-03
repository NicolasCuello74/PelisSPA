import axios from 'axios'
import CustomCard from '../components/CustomCard'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swAlert from '@sweetalert/with-react'
import Pagination from '../components/Pagination'
const { REACT_APP_URL, REACT_APP_KEY } = process.env

const HomePage = ({ addOrRemoveFromFavs }) => {
  //Aqui haremos una página de bienvenida con el listado de las primeras 20 peliculas
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [apiData, setApiData] = useState([])
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    const endpoint = async () => {
      if (!isAuthenticated) {
        return navigate(`/`)
      }
      try {
        const response = await axios.get(
          `${REACT_APP_URL}?api_key=${REACT_APP_KEY}&${currentPage}`,
          {
            params: {
              page: currentPage,
            },
          }
        )
        setApiData(response.data.results)
        setTotalPages(response.data.total_pages)
      } catch (error) {
        swAlert(<h2>Hubo errores intenta más tarde</h2>)
      }
    }
    endpoint()
  }, [currentPage, navigate, isAuthenticated])

  const handleClicks = (movie) => {
    const updatedFavorites = addOrRemoveFromFavs(movie)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <>
      <div className="row">
        {apiData.map((oneMovie, idx) => (
          <div className="col-3 p-3 h-auto mt-2 d-flex" key={idx}>
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
    </>
  )
}

export default HomePage
