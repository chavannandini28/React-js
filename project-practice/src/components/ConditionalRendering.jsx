import React, { useState } from 'react'
import './ConditionalRendering.css'
import { IoSunnyOutline, IoSunny } from "react-icons/io5";

const ConditionalRendering = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [user, setUser] = useState('user')
    // const [message, setMessage] = useState('Please Login')
    const [quantity, setQuantity] = useState(0)

    const[theme,setTheme] = useState('light')


    function handleLoggin(){
        if(isLoggedIn){               //set Loggout
            setIsLoggedIn(false)
            // setMessage('Please Login')
            setUser('user')

        }else{                        // login
            setIsLoggedIn(true)
            const userName = 'Kiran'
            setUser(userName)
            console.log(user)
            // setMessage(`Welcome ${user}`)
        }
    }
    function handleChangeTheme(){
        if(theme == 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
  return (
    <div className={`${theme == 'light' ? 'lightTheme' : 'darkTheme'}`}>


    <button style={{border:0, backgroundColor:'white'}} 
    
        onClick={()=>handleChangeTheme()}

    >{theme=='light' ? <IoSunnyOutline /> : <IoSunny />}</button>



    <h3>ConditionalRendering</h3>
    <p>{isLoggedIn ? `Welcome ${user}` : `Please Login`}</p>
    <button onClick={()=>handleLoggin()}>{isLoggedIn ? 'LOGOUT' : 'LOGIN'}</button>
    <hr />

    <p className={`${quantity >0 ? 'greenText' : 'redText'}`}>{quantity > 0 ? 'InStock' : 'Out of Stock'}</p>
    </div>
  )
}

export default ConditionalRendering