const addOrRemoveFromFavs = (movie) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  const movieIndex = favorites.findIndex((fav) => fav.id === movie.id)

  if (movieIndex >= 0) {
    favorites.splice(movieIndex, 1)
  } else {
    favorites.push(movie)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
  return favorites
}

export default addOrRemoveFromFavs
