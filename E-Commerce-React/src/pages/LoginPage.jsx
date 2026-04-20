import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    if (!email || !password) {
      toast.warning("Please fill all fields")
      return
    }

    if (email === "bhush@gmail.com" && password === "123456") {
      toast.success("Login successfully")

      localStorage.setItem("user", email)

      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)

    } else {
      toast.error("Invalid Credentials")
    }
  }
        
  return (
    <div className='container w-50 p-5 mt-5 bg-info rounded shadow'>
      <h3 className="text-white text-center mb-4">Login here...</h3>

      <form onSubmit={handleLogin}>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <p className="mt-3 text-center">
          <Link to="/register" className="text-white">
            If not registered?
          </Link>
        </p>

      </form>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default LoginPage