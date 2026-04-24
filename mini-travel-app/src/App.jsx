import { useState } from 'react'
import './App.css'
import data from './data.js'
import TravelList from './components/TravelList.jsx'

function App() {

  return (
    <>
     <div className="container">
      <h1 className='text-center'> 
        Mini Travel App</h1>
      <TravelList dt={data} ></TravelList>
     </div>
    </>
  )
}

export default App