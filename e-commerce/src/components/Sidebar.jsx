import React from "react";

function Sidebar(){

return(

<div className="bg-dark text-white p-3" style={{height:"100vh",width:"200px"}}>

<h4>Dashboard</h4>

<ul className="list-unstyled mt-4">

<li className="mb-3">Home</li>
<li className="mb-3">Users</li>
<li className="mb-3">Settings</li>

</ul>

</div>

)

}

export default Sidebar