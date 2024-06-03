import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/App.css'

const CustomCard = (props) => {
  const [fav, setFav] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setFav(!fav)
    props.addOrRemoveFromFavs(e)
  }

  return (
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
        {fav ? '🤍' : '💜'}
      </Button>
      <Card.Img variant="top" src={props.card.image} />
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
          <Link
            to={`/Detail/${props.card.id}`}
            className="btn btn-secondary p-0 border-3"
          >
            Detalle
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CustomCard
