import React from 'react'
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

const Genres = ({ genres, onGenreClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  if (isMobile) {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title="Select Genre"
        className="mb-3 w-100"
        variant="secondary"
      >
        {genres.map((genre) => (
          <Dropdown.Item key={genre.id} onClick={() => onGenreClick(genre.id)}>
            {genre.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    )
  }

  return (
    <ButtonGroup className="mb-3 d-flex flex-wrap w-100">
      {genres.map((genre) => (
        <Button
          key={genre.id}
          variant="secondary"
          onClick={() => onGenreClick(genre.id)}
          className="m-1 flex-grow-1 col-12 col-sm-auto"
        >
          {genre.name}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Genres
