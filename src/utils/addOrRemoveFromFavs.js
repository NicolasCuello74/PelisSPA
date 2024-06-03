// addOrRemoveFromFavs.js
let tempMovieInFavs = []

const addOrRemoveFromFavs = (e) => {
  const btn = e.currentTarget
  const parent = btn.parentElement
  const img = parent.querySelector('img').getAttribute('src')
  const titleElement = parent.querySelector('.card-title').textContent
  const overview = parent.querySelector('p').innerText
  const movieData = {
    id: btn.dataset.movieId,
    img,
    titleElement,
    overview,
  }

  const movieInArray = tempMovieInFavs.find(
    (oneMovie) => oneMovie.id === movieData.id
  )

  if (!movieInArray) {
    tempMovieInFavs.push(movieData)
    localStorage.setItem('fav', JSON.stringify(tempMovieInFavs))
    console.log('Se agregó a favoritos')
  } else {
    tempMovieInFavs = tempMovieInFavs.filter(
      (oneMovie) => oneMovie.id !== movieData.id
    )
    localStorage.setItem('fav', JSON.stringify(tempMovieInFavs))
    console.log('Se eliminó de favoritos')
  }

  return tempMovieInFavs
}

export default addOrRemoveFromFavs
