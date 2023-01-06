import React, { useState } from 'react'
import WindowTracker  from './WindowTracker'
const Nchallenge = () => {
    const [show, setShow] = useState(true)
    const handleClick = () => {
        setShow(prevValue => !prevValue)
    }
    return (
        <div className='container'>
            <button onClick={handleClick}>Toggle WidowTracker</button>
            {show && <WindowTracker />}
        </div>
    )
}
export default Nchallenge;