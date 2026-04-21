import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function LoginPage(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.email === email && user.password === password){

      toast.success("Login Successful");

      setTimeout(()=>{
        navigate("/dashboard");
      },1500);

    } else {

      toast.error("Invalid Email or Password");

    }

  }

  return(

    <div className="container mt-5">

      <div className="card p-4 mx-auto" style={{width:"350px"}}>

        <h3 className="text-center">Login</h3>

        <form onSubmit={handleLogin}>

          <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          />

          <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="btn btn-success w-100">
            Login
          </button>

        </form>

        <p className="mt-3 text-center">
          Not registered ?
          <Link to="/register"> Register</Link>
        </p>

      </div>

      <ToastContainer/>

    </div>

  );

}

export default LoginPage;