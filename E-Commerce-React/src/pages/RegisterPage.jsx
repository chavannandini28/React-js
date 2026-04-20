import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegisterPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleRegister(e) {
    e.preventDefault()

    // ✅ Validation
    if (!name || !email || !password) {
      toast.warning("Please fill all fields")
      return
    }

    // ✅ Save user (localStorage for demo)
    const user = { name, email, password }
    localStorage.setItem("userData", JSON.stringify(user))

    toast.success("Registered successfully 🎉")

    // Redirect to login
    setTimeout(() => {
      navigate('/')
    }, 1500)
  }

  return (
    <div className='container w-50 p-5 mt-5 bg-success rounded shadow'>
      <h3 className="text-white text-center mb-4">Register here...</h3>

      <form onSubmit={handleRegister}>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingName">Full Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingEmail">Email address</label>
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

        <button type="submit" className="btn btn-light w-100">
          Register
        </button>

        <p className="mt-3 text-center text-white">
          Already have an account?{' '}
          <Link to="/" className="text-warning">
            Login here
          </Link>
        </p>

      </form>

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default RegisterPage