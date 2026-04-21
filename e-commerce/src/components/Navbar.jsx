import React from "react";

function Navbar(){

const user = JSON.parse(localStorage.getItem("currentUser"))

return(

<div className="bg-primary text-white p-3 d-flex justify-content-between">

<h4>React Dashboard</h4>

<span>Welcome {user?.name}</span>

</div>

)

}

export default Navbar