import React, { useState, useEffect } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import YoutubePlayer from 'react-player/youtube'
import fetchVideo from '../utils/fetchVideo'
import '../css/App.css'
import getFavoritesLocalStorage from '../utils/getFavoritesLocalStorage'
import addOrRemoveFromFavs from '../utils/addOrRemoveFromFavs'

const CustomCard = (props) => {
  const [fav, setFav] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [videoKey, setVideoKey] = useState('')

  useEffect(() => {
    const favs = getFavoritesLocalStorage()
    const isFav = favs.some((favMovie) => favMovie.id === props.card.id)
    setFav(isFav)
  }, [props.card.id])

  const handleClick = (e) => {
    e.preventDefault()
    const updatedFavorites = addOrRemoveFromFavs(props.card)
    setFav(!fav)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const handleVideoOpen = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleVideoClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const getVideoKey = async () => {
      const key = await fetchVideo(props.card.id)
      setVideoKey(key)
    }

    getVideoKey()
  }, [props.card.id])

  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`
  return (
    <>
      <Card
        className="pb-0 m-0 border-2"
        style={{
          width: '25rem',
          height: '29rem',
        }}
      >
        <Card.Img variant="top" className="img-fluid" src={props.card.image} />
        <Card.Body className="d-flex flex-column justify-content-around border-0 p-2">
          <Card.Title>{props.card.title}</Card.Title>
          <Card.Text>{props.card.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between gap-1">
          <Button
            className="d-flex justify-content-center align-items-center bg-black"
            style={{ width: 'auto', height: 'auto' }}
            onClick={handleClick}
            data-movie-id={props.card.id}
          >
            {fav ? '💜' : '🤍'}
          </Button>
          <Button
            style={{ width: '80%' }}
            variant="outline-dark"
            onClick={handleVideoOpen}
          >
            Trailer
          </Button>
        </Card.Footer>
      </Card>
      <Modal
        size="lg"
        show={showModal}
        onHide={handleVideoClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {videoKey ? (
            <div className="video-container" style={{ height: '50vh' }}>
              <YoutubePlayer
                url={videoUrl}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          ) : (
            <Modal.Body style={{ height: '30vh' }}>
              <h2>No trailer available</h2>
            </Modal.Body>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CustomCard
