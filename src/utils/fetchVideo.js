import axios from 'axios'
const { REACT_APP_KEY } = process.env

const fetchVideo = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${REACT_APP_KEY}`
    )
    const videoResult = response.data.results.find(
      (video) => video.site === 'YouTube' && video.type === 'Trailer'
    )
    return videoResult ? videoResult.key : null
  } catch (error) {
    console.error('Error fetching the video:', error)
    return null
  }
}

export default fetchVideo
