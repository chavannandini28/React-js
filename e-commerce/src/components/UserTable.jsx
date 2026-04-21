import React, {useState} from "react";

function UserTable(){

const users = JSON.parse(localStorage.getItem("users")) || [];

const [search,setSearch] = useState("");

const filteredUsers = users.filter((u)=>
u.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div>

<input
className="form-control mb-3"
placeholder="Search user..."
onChange={(e)=>setSearch(e.target.value)}
/>

<table className="table table-bordered">

<thead>

<tr>
<th>Name</th>
<th>Email</th>
</tr>

</thead>

<tbody>

{filteredUsers.map((u,index)=>(
<tr key={index}>
<td>{u.name}</td>
<td>{u.email}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default UserTable