
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Notfound from './pages/Notfound'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='*' element={ <Notfound />} />
      </Routes>
      
    </>
  )
}

export default App
