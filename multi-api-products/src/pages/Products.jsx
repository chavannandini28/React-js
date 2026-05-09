import React, { useEffect, useState } from 'react'
import UseProducts from '../customHook/UseProducts'

const Products = () => {
    const [products,setProducts] = useState([])
    const {data,loading, error} = UseProducts("https://dummyjson.com/products")

    console.log(data)

    if(loading) return <p>Loading</p>
    if(error) return <p>Error in api</p>

  return (
    <>
    <div>Products</div>
    <p>Render prodcuts here</p>
        <div style={{display:"flex" , justifyContent:"space-around",flexWrap:"wrap"}}>
    {data.products?.map((p,i)=>(
      <div style={{border:"1px solid gray", width:"15rem", padding:"7px"}}>
            <h3 key={i}>{p.title}</h3>
            <p>{p.description}</p>
            </div>
    ))}
    </div>
    </>
  )
}

export default Products