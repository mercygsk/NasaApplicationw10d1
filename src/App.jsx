import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import SrchNasaList from './pages/SrchNasaList'
import Nav from './components/Nav'

function App() {
  

  return (
    <>
    
      <div className='App'>
      <Nav />
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/SrchNasaList' element={<SrchNasaList/>} />
    </Routes>
    </div>
      
    </>
  )
}

export default App
