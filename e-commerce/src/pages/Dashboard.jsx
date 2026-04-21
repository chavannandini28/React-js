import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import UserTable from "../components/UserTable"
import { useNavigate } from "react-router-dom"

function Dashboard(){

const navigate = useNavigate()

const logout = ()=>{

localStorage.removeItem("currentUser")

navigate("/")

}

return(

<div className="d-flex">

<Sidebar/>

<div className="flex-grow-1">

<Navbar/>

<div className="container mt-4">

<button
className="btn btn-danger mb-3"
onClick={logout}
>
Logout
</button>

<UserTable/>

</div>

</div>

</div>

)

}

export default Dashboard