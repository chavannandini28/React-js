import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Receipes from './pages/Receipes'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/receipe' element={<Receipes />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App