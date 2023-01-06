import React, { useEffect, useState } from 'react'
const WindowTrackerCopy = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function watchWidth() {
        console.log(`changing width`)
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize", watchWidth)
        return function () {
            console.log(`cleaning up`)
            window.removeEventListener("resize", watchWidth)
        }
    },[])
    return(
        <div className='windowTracker'>
            <h1>Current Window Width is {windowWidth}</h1>
        </div>
    )
}
export default WindowTrackerCopy;