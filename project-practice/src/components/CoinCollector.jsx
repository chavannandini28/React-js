import React, { useReducer } from 'react'

const initialState = {
    coin:0,
    level:1,
    bonus:0
}

function coinReducer(state,action){
    switch(action.type){
        case 'COLLECT_COIN':
            return {...state, coin:state.coin + 1}
        case 'COLLECT_5_COINS':
            return {...state, coin:state.coin + 5}

        case 'BONUS':
            return {...state, bonus:state.bonus + 10}

        case 'LEVEL_UP':
            return {...state, level:state.level + 1}

        case 'RESET':
            return { coin:0, level:1, bonus:0 }
    }
}

const CoinCollector = () => {
    const [state, dispatch] = useReducer(coinReducer,initialState)
  return (
    <>
    <div>CoinCollector</div>
    <h3>
        <span style={{color:'red',paddingRight:"10px"}}>Coin:{state.coin}</span>
        <span style={{color:'blue',paddingRight:"10px"}}>Bonus:{state.bonus}</span>
        <span style={{color:'green',paddingRight:"10px"}}>LEVEL:{state.level}</span>
        
        </h3>
        <button onClick={()=>dispatch({type:'COLLECT_COIN'})}>COLLECT_COIN</button>
        <button onClick={()=>dispatch({type:'COLLECT_5_COINS'})}>COLLECT_5_COINS</button>
        <button onClick={()=>dispatch({type:'BONUS'})}>BONUS</button>
        <button onClick={()=>dispatch({type:'LEVEL_UP'})}>LEVEL_UP</button>
        <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>

    </>
  )
}

export default CoinCollector