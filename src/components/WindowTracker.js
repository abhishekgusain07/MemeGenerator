import React, { useEffect, useState } from 'react' 
const WindowTracker = () => {
    const[windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", ()=>{
            setWindowWidth(window.innerWidth)
        })
    },[windowWidth])
    return (
        <div className='windowTracker'>
        <h1> window width is {windowWidth}</h1>
        </div>
    )
}
export default WindowTracker;