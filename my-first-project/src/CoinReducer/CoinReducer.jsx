// coin collector Game 

import React, { useReducer } from 'react'
import './CoinReducer.css'

const initialState = {coin:50}

function reducer(state, action){
    switch (action.type){
        case 'COLLECT_COIN':
            console.log("Action type in collect coin reducer",action.type)
            console.log("State in reducer",state)
            return {coin: state.coin + 5}
        case 'LOOSE_COIN':
            return {coin: state.coin - 2}
        case 'RESET':
            return {coin: 50}
        default:
            return state
    }
}
const CoinReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <div className='divCoin'>
    <h1>🪙🪙🪙🪙 Coin collector Game 🪙🪙🪙🪙🪙</h1>
    <h3>Coin : {state.coin}</h3>
    <button onClick={()=>dispatch({type:'COLLECT_COIN'})}>Collect Coin </button>
    <button onClick={()=>dispatch({type:'LOOSE_COIN'})}>loose Coin</button>
    <button onClick={()=>dispatch({type:'RESET'})}>RESET </button>
    </div>
    </>
  )
}

export default CoinReducer