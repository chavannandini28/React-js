import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import iPhone17 from './assets/apple17.jpg'   // ✅ fixed extension
import './App.css'

import Product from './components/Product'
import Button from './components/Button'
import ClassBasedProduct from './components/ClassBasedProduct'
import Greet from './components/Greet'
import Counter from './components/Counter'
import UserDeatils from './components/UserDeatils'
import UserDetails1 from './users/UserDetails'
import CoinReducer from './CoinReducer/CoinReducer'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const subheading = {
    textAlign: 'center',
    textShadow: '2px 2px 1px red'
  }

  return (
    <>
      {/* Reducer Component */}
      <CoinReducer />

      {/* User Components */}
      <UserDetails1 />
      <UserDeatils />

      {/* Counter */}
      <Counter />

      {/* Greeting Components */}
      <Greet user={{ name: 'Sana', session: 5, exam: 0 }} />
      <Greet user={{ name: 'Shivam', session: 2, exam: 10 }} />
      <Greet user={{ name: 'Akash', session: 0, exam: 10 }} />
      <Greet user={{ name: 'Nayan', session: 10, exam: 20 }} />

      {/* Heading */}
      <h1 style={{ color: "red", textAlign: 'center' }}>Hello World</h1>
      <h3 style={subheading}>Welcome to my React tutorial</h3>

      {/* Button */}
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Button text123="Registerrrrrrrrr" />
      </div>

      {/* ✅ iPhone Image (Fixed + Visible) */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img src={iPhone17} alt="iPhone 17" width="250" />
      </div>

      {/* Products */}
      <Product />
      <ClassBasedProduct />
    </>
  )
}

export default App