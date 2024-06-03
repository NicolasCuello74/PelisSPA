import React from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import swAlert from '@sweetalert/with-react'
const { REACT_APP_FIND_ID, REACT_APP_KEY } = process.env

const Detalle = () => {
  const { isAuthenticated, isLoading } = useAuth0()
  const [detailCard, setDetailCard] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const endpoint = `${REACT_APP_FIND_ID}/${id}?api_key=${REACT_APP_KEY}`
    axios
      .get(endpoint)
      .then((response) => setDetailCard(response.data))
      .catch((error) => {
        swAlert(<h2>Hubo errores intenta más tarde</h2>)
      })
  }, [id])

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated) {
    return <div>Debes iniciar sesión para ver este contenido.</div>
  }

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center p-3 mt-2">
        <Card style={{ width: '50rem' }}>
          <Card.Img
            variant="top"
            src={
              detailCard.backdrop_path
                ? `https://image.tmdb.org/t/p/original${detailCard.backdrop_path}`
                : 'https://res.cloudinary.com/decdqjawu/image/upload/t_Banner 16:9/v1714514493/Captura_de_pantalla_2024-04-30_184335_wxyiro.png'
            }
          />
          <Card.Body>
            <Card.Title>{detailCard.title}</Card.Title>
            <Card.Text>
              {detailCard.overview ? (
                detailCard.overview
              ) : (
                <p>
                  You can search for the description on the internet using the
                  movie title.
                </p>
              )}
            </Card.Text>
            <div className="row">
              <Link to={`/home`} className="btn btn-secondary p-0 border-3">
                Volver al Home
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Detalle
