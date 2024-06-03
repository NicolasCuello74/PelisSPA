import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutMe from './views/AboutMe'
import Landing from './views/Landing'
import Favorites from './views/Favorites'
import Detalle from './views/Detalle'
import Buscador from './views/Buscador'
import './css/bootstrap.min.css'
import './css/App.css'
import HomePage from './views/HomePage'
import addOrRemoveFromFavs from './utils/addOrRemoveFromFavs'

function App() {
  return (
    <>
      <div className="container p-3 mb-2 text-info-emphasis">
        <NavBar />
        <Routes className="mb-3">
          <Route exact path="/" element={<Landing />} />
          <Route
            path="/home"
            element={<HomePage addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/Detail/:id" element={<Detalle />} />
          <Route
            path="/Favoritos"
            element={<Favorites addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Search" element={<Buscador />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
