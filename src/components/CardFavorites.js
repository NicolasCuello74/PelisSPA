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
          className="d-flex justify-content-center align-items-center position-absolute bg-light"
          style={{ width: '30px', height: '30px' }}
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
          <div className="d-flex flex-row justify-content-around border-0 m-0 p-2">
            <Button variant="outline-dark" onClick={handleVideoOpen}>
              Trailer
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={handleVideoClose}
        className="d-flex justify-content-center align-content-center align-items-center"
        centered
        size="lg"
        variant="primary"
        dialogClassName="custom-modal-background"
      >
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {videoKey ? (
            <YoutubePlayer url={videoUrl} controls={true} />
          ) : (
            <p>No trailer available</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CustomCard
