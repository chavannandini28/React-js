import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{height:"90px", backgroundColor:"pink"}}>
        <div style={{display:'flex',justifyContent:"space-evenly"}}>
        <i style={{color:"magenta"}}>Custom Hook</i>
        <b><Link to='/'>Products</Link></b>
        <b><Link to='/receipe'>Receipe</Link></b>
        </div>
    </nav>
  )
}

export default Navbar