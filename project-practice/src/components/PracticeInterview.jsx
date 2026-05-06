import React, { useEffect, useState } from 'react'

const PracticeInterview = () => {


    // 1. Counter App
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('')

    // 👉 TODO:
    // 1.1 Add function to increase count
    function handleIncreament() {
        setCount(count + 1)
    }
    // 1.2 Add condition: if count > 5, show message "Limit reached!"
    useEffect(() => {
        if (count > 5) {
            const msg = 'Limit reached!'
            setMessage(msg)
        }
    }, [count])

    const [form, setForm] = useState({ name: "", email: "" });


    // 2. Register Form

    // 👉 TODO:
    // 2.1 Handle input changes dynamically
    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target

        setForm({ ...form, [name]: value })

    }
    // 2.2 On submit, console.log() the form values

    function handleRegisterSubmit(e) {
        e.preventDefault()
        console.log(form, "Form name and Email")
    }

    // 3. Posts

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 👉 TODO:
    // 3.1 Use useEffect to fetch data
    async function fetchData(){
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    }
    useEffect(()=>{
        fetchData()
        setLoading(false)
    },[])
   

//4. . Todo List
  const [todos, setTodos] = useState(["Buy Vegetables", "Buy Grocery", "Buy Fruits" ]);

    // 👉 TODO:
  // 4.1 Create a delete function using filter()
  function handleDelete(index){
    const filteredToDo = todos.filter((g,i)=> i !== index)
    setTodos(filteredToDo)
  }


//   5. Search Filter 
const [search, setSearch] = useState("");
const [filteredProducts, setFilteredProducts] = useState([])

  const products = [
    "Laptop",
    "Phone",
    "Headphones",
    "Camera",
    "Keyboard",
    "Mouse",
  ];
  // 👉 TODO:
//   useEffect(()=>{
//     setFilteredProducts(products)
//   },[])
  // 5.1 Filter products based on search term (case insensitive)
      useEffect(() => {
        const filterProd = products.filter((p) => {
            return p.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredProducts(filterProd)

    }, [search])
  // 5.2 Display only matching items





 // 3.2 Show "Loading..." until data arrives
    if(loading) return <div>Loading...</div>




    return (
        <>
            <div>PracticeInterview</div>
            <div style={{ textAlign: "center" }}>
                <h2>1. Counter App</h2>
                <p>Count: {count}</p>
                {/* Add button to increase count */}
                <button onClick={() => handleIncreament()}>Increament</button>
                {/* Conditionally render message when count > 5 */}
                <div>{message}</div>
            </div>
            <hr />
            <div style={{ textAlign: "center" }}>
                <form onSubmit={handleRegisterSubmit}>
                    <h2>2. Register Form</h2>
                    <input type="text" name="name" placeholder="Enter name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input type="email" name="email" placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>

            </div>

            <div style={{ textAlign: "center" }}>
                <div>
                    <h2>3. Posts</h2>
                    {/* Show loading or post titles */}
                    <ul>
                        {posts.map((p)=>(
                            <li key={p.id}>{p.title}</li>
                        ))}
                    </ul>
                </div>

            </div>

 <div style={{ textAlign: "center" }}>
      <h2>4. Todo List</h2>
      {todos.map((item, index) => (
        <div key={index}>
          {item}
          {/* Add Delete button here */}
          <button onClick={()=>handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>

<div style={{ padding: "20px" }}>
      <h2>5. Search Filter</h2>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Render filtered products here */}
      <ul>
      {filteredProducts.map((p,i)=>(
        <li key={i}>{p}</li>
      ))}
      </ul>
    </div>


        </>
    )
}

export default PracticeInterview