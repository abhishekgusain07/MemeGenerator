import React, { useState } from 'react'
import Count from './Count'
export default function Testing4() {
    const [count, setCount] = useState(0);
    function add() {
        setCount(prevCount => prevCount+1)
    }
    function subtract() {
        setCount(prevCount => prevCount-1)
    }
    console.log('Testing4 componenet rendered')
    return(
        <div className='counter'>
            <button className='counter--minus' onClick={subtract}>-</button>
            <Count number={count}/>
            <button className='counter--plus' onClick={add}>+</button>
        </div>
    )
}