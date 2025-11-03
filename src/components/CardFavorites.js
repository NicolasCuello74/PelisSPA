import React, { useState, useEffect } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import YoutubePlayer from 'react-player/youtube'
import fetchVideo from '../utils/fetchVideo'
import '../css/App.css'

const CustomCard = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [videoKey, setVideoKey] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    props.addOrRemoveFromFavs(props.card)
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
        <Button
          className="d-flex justify-content-center align-items-center position-absolute"
          style={{ width: '30px', height: '30px' }}
          variant="outline-dark"
          onClick={handleClick}
          data-movie-id={props.card.id}
        >
          ❌
        </Button>
        <Card.Img className="img-fluid" variant="top" src={props.card.image} />
        <Card.Body className="d-flex flex-column justify-content-around border-0 p-2">
          <Card.Title>{props.card.title}</Card.Title>
          <Card.Text
            style={{
              width: 'auto',
              height: '80px',
            }}
          >
            {props.card.description}
          </Card.Text>
          <Card.Footer className="d-flex justify-content-center gap-1">
            <Button
              style={{ width: '90%' }}
              variant="outline-dark"
              onClick={handleVideoOpen}
            >
              Trailer
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={handleVideoClose}
        size="lg"
        centered
        dialogClassName="custom-modal" // Cambiar aquí
      >
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        {videoKey ? (
          <Modal.Body style={{ height: '50vh' }}>
            <YoutubePlayer
              url={videoUrl}
              controls={true}
              width="100%"
              height="100%"
            />
          </Modal.Body>
        ) : (
          <Modal.Body style={{ height: '30vh' }}>
            <p>No trailer available</p>
          </Modal.Body>
        )}
      </Modal>
    </>
  )
}

export default CustomCard
