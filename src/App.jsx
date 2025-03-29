
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutUs />}/>
      </Routes>
      
    </>
  )
}

export default App
