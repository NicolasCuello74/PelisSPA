import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const Genres = ({ genres, onGenreClick }) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Seleccionar Género"
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
export default Genres
