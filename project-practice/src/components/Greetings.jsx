import React from 'react'

const Greetings = (props) => {
    console.log(props)
    const {user11, age }= props
  return (
    <div>Welcome ,  {user11}  - {age} </div>
  )
}

export default Greetings