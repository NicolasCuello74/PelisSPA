import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Listado from './components/Listado'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="container-xl">
        <NavBar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/listado" Component={Listado} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
