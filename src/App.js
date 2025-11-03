import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Landing from './views/Landing'
import Favorites from './views/Favorites'
import GenreFilterPage from './views/GenreFilterPage'
import Buscador from './views/Buscador'
import './css/App.css'
import HomePage from './views/HomePage'
import addOrRemoveFromFavs from './utils/addOrRemoveFromFavs'

function App() {
  return (
    <>
      <div
        id="App"
        className="d-flex flex-column justify-content-between min-vh-100 bg-dark text-light"
      >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            path="/home"
            element={<HomePage addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route
            path="/genre/:genreId"
            element={
              <GenreFilterPage addOrRemoveFromFavs={addOrRemoveFromFavs} />
            }
          />
          <Route
            path="/Favoritos"
            element={<Favorites addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/Search" element={<Buscador />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
