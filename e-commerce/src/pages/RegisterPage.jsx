import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function RegisterPage() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    const user = {name,email,password};

    localStorage.setItem("user",JSON.stringify(user));

    toast.success("Registration Successful");

    setTimeout(()=>{
      navigate("/");
    },1500);

  }

  return (

    <div className="container mt-5">

      <div className="card p-4 mx-auto" style={{width:"350px"}}>

        <h3 className="text-center">Register</h3>

        <form onSubmit={handleRegister}>

          <input
          className="form-control mb-3"
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
          />

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

          <button className="btn btn-primary w-100">
            Register
          </button>

        </form>

        <p className="mt-3 text-center">
          Already registered ?
          <Link to="/"> Login</Link>
        </p>

      </div>

      <ToastContainer/>

    </div>

  );

}

export default RegisterPage;