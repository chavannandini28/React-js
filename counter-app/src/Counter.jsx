import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function handleIncreament(){
        console.log("Click")
        setCount(count+1)
    }
    const handleDecreament =()=>{
        setCount(count-1)
    }

  return (
    <>
    <h1>Counter Application</h1>
    <h3> Count : {count}</h3>
    <button onClick={()=>handleIncreament()}>Increament</button>
    <button onClick={()=>handleDecreament()}>Decreament</button>
    </>
  )
}

export default Counter